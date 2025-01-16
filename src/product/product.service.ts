import {
  Body,
  Get,
  Injectable,
  NotFoundException,
  Param,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async remove(id: number): Promise<{ message: string }> {
    const product = await this.findOne(id); // Kiểm tra xem sản phẩm có tồn tại không
    await this.productRepository.remove(product); // Xóa sản phẩm
    return { message: `Xoá sản phẩm với ID ${id} thành công` }; // Trả về thông báo
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.findOne(id);
    const updatedProduct = Object.assign(product, updateProductDto);
    return this.productRepository.save(updatedProduct);
  }
  // Thêm phương thức giảm số lượng sản phẩm
  async reduceQuantity(id: number, quantity: number): Promise<Product> {
    if (quantity <= 0) {
      throw new BadRequestException('Quantity must be greater than zero.');
    }

    const product = await this.findOne(id);

    if (product.quantity < quantity) {
      throw new BadRequestException(
        `Not enough stock. Only ${product.quantity} items available.`,
      );
    }

    // Giảm số lượng
    product.quantity -= quantity;

    return this.productRepository.save(product);
  }
}

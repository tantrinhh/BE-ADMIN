import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOderDto } from './dto/create-oder.dto';
import { UpdateOderDto } from './dto/update-oder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Oder } from './entities/oder.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OderService {
  constructor(
    @InjectRepository(Oder)
    private readonly orderRepository: Repository<Oder>,
  ) {}

  async createOrder(createOderDto: CreateOderDto): Promise<Oder> {
    const newOrder = this.orderRepository.create(createOderDto);
    return this.orderRepository.save(newOrder);
  }

  // Lấy danh sách tất cả các đơn hàng
  async findAll(): Promise<Oder[]> {
    return this.orderRepository.find(); // Lấy tất cả bản ghi trong bảng orders
  }

  async remove(id: number): Promise<void> {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) {
      throw new NotFoundException(`Order with id ${id} not found`);
    }
    await this.orderRepository.remove(order);
  }

  async getBestSellingProducts() {
    const result = await this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.products', 'product') // Giả sử bạn có mối quan hệ giữa bảng orders và products
      .select('product.productName', 'productName')
      .addSelect('SUM(order.quantity)', 'totalItem') // Đếm tổng số lượng sản phẩm bán ra
      .groupBy('product.productName') // Nhóm theo tên sản phẩm
      .orderBy('totalItem', 'DESC') // Sắp xếp theo tổng số lượng bán ra giảm dần
      .getRawMany();

    return result;
  }

  update(id: number, updateOderDto: UpdateOderDto) {
    return `This action updates a #${id} oder`;
  }
}

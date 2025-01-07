import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    remove(id: number): Promise<{
        message: string;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
}

import { Injectable } from '@nestjs/common';
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

  async createOrder(createOrderDto: CreateOderDto): Promise<Oder> {
    const order = this.orderRepository.create(createOrderDto);
    return this.orderRepository.save(order);
  }
  // findAll() {
  //   return `This action returns all oder`;
  // }

  async getBestSellingProducts(): Promise<any> {
    const result = await this.orderRepository
      .createQueryBuilder('order')
      .select('order.product, SUM(order.totalItem) as totalSold')
      .groupBy('order.product')
      .orderBy('totalSold', 'DESC')
      .limit(5) // Giới hạn số lượng sản phẩm muốn lấy (ví dụ: 5 sản phẩm bán chạy nhất)
      .getRawMany();

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} oder`;
  }

  update(id: number, updateOderDto: UpdateOderDto) {
    return `This action updates a #${id} oder`;
  }

  remove(id: number) {
    return `This action removes a #${id} oder`;
  }
}

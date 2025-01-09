import { CreateOderDto } from './dto/create-oder.dto';
import { UpdateOderDto } from './dto/update-oder.dto';
import { Oder } from './entities/oder.entity';
import { Repository } from 'typeorm';
export declare class OderService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Oder>);
    createOrder(createOrderDto: CreateOderDto): Promise<Oder>;
    getBestSellingProducts(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateOderDto: UpdateOderDto): string;
    remove(id: number): string;
}

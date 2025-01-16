import { CreateOderDto } from './dto/create-oder.dto';
import { UpdateOderDto } from './dto/update-oder.dto';
import { Oder } from './entities/oder.entity';
import { Repository } from 'typeorm';
export declare class OderService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Oder>);
    createOrder(createOderDto: CreateOderDto): Promise<Oder>;
    findAll(): Promise<Oder[]>;
    remove(id: number): Promise<void>;
    getBestSellingProducts(): Promise<any[]>;
    update(id: number, updateOderDto: UpdateOderDto): string;
}

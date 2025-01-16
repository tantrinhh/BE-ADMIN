import { OderService } from './oder.service';
import { CreateOderDto } from './dto/create-oder.dto';
import { UpdateOderDto } from './dto/update-oder.dto';
import { Oder } from './entities/oder.entity';
export declare class OderController {
    private readonly oderService;
    constructor(oderService: OderService);
    createOder(createOrderDto: CreateOderDto): Promise<Oder>;
    findAll(): Promise<Oder[]>;
    getBestSellingProducts(): Promise<any[]>;
    update(id: string, updateOderDto: UpdateOderDto): string;
    remove(id: string): Promise<void>;
}

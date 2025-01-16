import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OderService } from './oder.service';
import { CreateOderDto } from './dto/create-oder.dto';
import { UpdateOderDto } from './dto/update-oder.dto';
import { Oder } from './entities/oder.entity';

@Controller('oder')
export class OderController {
  constructor(private readonly oderService: OderService) {}

  @Post()
  async createOder(@Body() createOrderDto: CreateOderDto): Promise<Oder> {
    return this.oderService.createOrder(createOrderDto);
  }
  @Get()
  async findAll(): Promise<Oder[]> {
    return this.oderService.findAll(); // Gọi tới service để trả về danh sách đơn hàng
  }

  // Thêm phương thức GET để lấy một đơn hàng dựa trên id
  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<Oder> {
  //   return this.oderService.findOne(id); // Gọi tới service để tìm đơn hàng theo id
  // }
  @Get('best-selling')
  async getBestSellingProducts() {
    return this.oderService.getBestSellingProducts();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.oderService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOderDto: UpdateOderDto) {
    return this.oderService.update(+id, updateOderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oderService.remove(+id);
  }
}

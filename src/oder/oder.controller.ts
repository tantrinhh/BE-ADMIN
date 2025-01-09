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

  @Get('best-selling')
  async getBestSellingProducts() {
    return this.oderService.getBestSellingProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOderDto: UpdateOderDto) {
    return this.oderService.update(+id, updateOderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oderService.remove(+id);
  }
}

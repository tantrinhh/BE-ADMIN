import { Module } from '@nestjs/common';
import { OderService } from './oder.service';
import { OderController } from './oder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oder } from './entities/oder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Oder])],
  controllers: [OderController],
  providers: [OderService],
})
export class OderModule {}

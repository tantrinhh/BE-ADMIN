import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ProductModule } from './product/product.module';
import { OderModule } from './oder/oder.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Host của PostgreSQL
      port: 5432, // Cổng mặc định
      username: 'postgres', // Tên đăng nhập
      password: '5432',
      database: 'fashion', // Tên cơ sở dữ liệu
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entity
      synchronize: true,
    }),
    // ProductModule,
    UsersModule,
    User,
    ProductModule,
    OderModule,
  ],
})
export class AppModule {}

import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<{ message: string }> {
    const { useremail, password, fullname, phone } = createUserDto;

    // Kiểm tra email đã tồn tại chưa
    const existingUser = await this.userRepository.findOne({
      where: { useremail },
    });
    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo người dùng mới
    const user = this.userRepository.create({
      useremail,
      password: hashedPassword,
      fullname,
      phone,
    });

    await this.userRepository.save(user);
    return { message: 'User registered successfully' };
  }

  async login(
    useremail: string,
    password: string,
  ): Promise<{ message: string; user: any }> {
    const user = await this.userRepository.findOne({
      where: { useremail },
    });

    if (!user) {
      throw new BadRequestException('Email not found');
    }

    // So sánh mật khẩu đã nhập với mật khẩu mã hóa
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password');
    }

    const { password: _, ...userWithoutPassword } = user;

    return {
      message: 'Đăng nhập thành công',
      user: userWithoutPassword,
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

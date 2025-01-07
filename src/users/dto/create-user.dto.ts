import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  Length,
} from 'class-validator';

export class LoginUserDto {
  @IsEmail() // Kiểm tra định dạng email
  @IsNotEmpty() // Không được để trống
  useremail: string;

  @IsString() // Phải là chuỗi
  @Length(6, 20) // Mật khẩu phải dài từ 6 đến 20 ký tự
  @IsNotEmpty()
  password: string;
}

export class CreateUserDto extends LoginUserDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsPhoneNumber(null) // Kiểm tra số điện thoại hợp lệ (theo mã vùng)
  @IsNotEmpty()
  phone: string;
}

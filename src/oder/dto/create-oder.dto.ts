import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
export class CreateOderDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  district: string;

  @IsString()
  @IsNotEmpty()
  ward: string;

  @IsString()
  @IsNotEmpty()
  streetAddress: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsNumber()
  totalItem: number;

  @IsNumber()
  totalPrice: number;
}

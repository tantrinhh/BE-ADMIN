import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  isString,
} from 'class-validator';
export class CreateProductDto {
  @IsString()
  image: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  discount: number;

  @IsNumber()
  collection: number;

  @IsArray()
  @IsOptional()
  sizes?: string[];

  @IsArray()
  @IsOptional()
  colors?: string[];

  @IsString()
  shortdescription?: string;

  @IsNumber()
  quantity: number;

  @IsString()
  brand?: string;
}

import { IsBoolean, IsInt, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateProductDto {

  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  stock: number;

  @IsBoolean()
  estado: boolean;

  @IsString()
  category: string;

}

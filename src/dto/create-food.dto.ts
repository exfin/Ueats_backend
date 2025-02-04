import { IsString, IsNumber, IsMongoId } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  image: string;

  @IsString()
  category: string;

  @IsMongoId()
  restaurantId: string;
}

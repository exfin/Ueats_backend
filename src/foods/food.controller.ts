import { Controller, Get, Post, Body } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from '../dto/create-food.dto';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  async addFood(@Body() createFoodDto: CreateFoodDto) {
    return this.foodService.addFood(createFoodDto);
  }

  @Get()
  async getFoods() {
    return this.foodService.getFoods();
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from 'src/dto/create-restaurant.dto';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async addFood(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.addRestaurant(createRestaurantDto);
  }

  @Get()
  async getFoods() {
    return this.restaurantService.getRestaurants();
  }
}

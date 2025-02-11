import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './restaurant.model';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<RestaurantDocument>) {}

  async addRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<{ success: boolean; message: string }> {
    try {
      const restaurant = new this.restaurantModel(createRestaurantDto);
      await restaurant.save();
      return { success: true, message: 'Restaurant added successfully' };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Failed to add restaurant' };
    }
  }

  async getRestaurants(): Promise<Restaurant[]> {
    try {
      return await this.restaurantModel.find().limit(4).exec();
    } catch (error) {
      console.error('Error fetching Restaurants', error);
      throw new Error('Error fetching Restaurants');
    }
  }
}

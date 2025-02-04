import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Food, FoodDocument } from './food.model';
import { CreateFoodDto } from '../dto/create-food.dto';

@Injectable()
export class FoodService {
  constructor(@InjectModel(Food.name) private foodModel: Model<FoodDocument>) {}

  async addFood(createFoodDto: CreateFoodDto): Promise<{ success: boolean; message: string }> {
    try {
      const food = new this.foodModel(createFoodDto);
      await food.save();
      return { success: true, message: 'Food added successfully' };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Failed to add food' };
    }
  }

  async getFoods(): Promise<Food[]> {
    try {
      return await this.foodModel.find().limit(4).exec();
    } catch (error) {
      console.error('Error fetching foods', error);
      throw new Error('Error fetching foods');
    }
  }
}

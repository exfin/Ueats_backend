import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodModule } from './foods/food.module';
import { RestaurantModule } from './restaurants/restaurant.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://juanmiguellp22:GCwiaucGBOUAwQd8@ueats.k4yrv.mongodb.net/'), FoodModule
    , RestaurantModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



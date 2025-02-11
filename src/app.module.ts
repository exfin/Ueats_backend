import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodModule } from './foods/food.module';
import { RestaurantModule } from './restaurants/restaurant.module';
import { ConfigModule, ConfigService } from '@nestjs/config';



@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }), 
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'), 
      }),
    })
    , FoodModule
    , RestaurantModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



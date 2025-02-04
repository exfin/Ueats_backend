import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://juanmiguellp22:GCwiaucGBOUAwQd8@ueats.k4yrv.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

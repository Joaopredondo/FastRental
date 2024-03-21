import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarService } from './car/car.service';
import { CarCategoryService } from './car-category/car-category.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CarService, CarCategoryService],
})
export class AppModule {}

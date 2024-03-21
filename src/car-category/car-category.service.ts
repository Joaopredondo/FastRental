import { Injectable } from '@nestjs/common';

@Injectable()
export class CarCategoryService {
  getCategories(): string[] {
    return ['Compact', 'SUV', 'Luxury'];
  }
}

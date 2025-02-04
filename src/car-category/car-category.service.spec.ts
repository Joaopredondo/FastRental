import { Test, TestingModule } from '@nestjs/testing';
import { CarCategoryService } from './car-category.service';

describe('CarCategoryService', () => {
  let service: CarCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarCategoryService],
    }).compile();

    service = module.get<CarCategoryService>(CarCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of car categories', () => {
    const categories = service.getCategories();
    expect(categories).toEqual(['Compact', 'SUV', 'Luxury']);
  });
});

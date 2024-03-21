import { Test, TestingModule } from '@nestjs/testing';
import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarService],
    }).compile();

    service = module.get<CarService>(CarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a random car from a given category', () => {
    const category = ['Compact', 'SUV', 'Luxury'];
    const car = service.getRandomCar(category);
    expect(car).toBeDefined();
    expect(category).toContain(car.category);
  });
});

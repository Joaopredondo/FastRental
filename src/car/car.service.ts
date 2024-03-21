import { Injectable } from '@nestjs/common';

@Injectable()
export class CarService {
  private cars = [
    { brand: 'Toyota', model: 'Corolla', category: 'Compact' },
    { brand: 'Ford', model: 'Explorer', category: 'SUV' },
    { brand: 'Mercedes', model: 'S-Class', category: 'Luxury' },
  ];

  getRandomCar(categories: string[]): any {
    const availableCars = this.cars.filter(car => categories.includes(car.category));
    const randomIndex = Math.floor(Math.random() * availableCars.length);
    return availableCars[randomIndex];
  }
}

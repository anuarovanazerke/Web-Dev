import {Injectable} from '@angular/core';
@Injectiable({
    providedin:'root',
})
export class CarService {
    
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

import {Component, inject} from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  template: `<p>CAr Listing:{{display}}</p>`,
})
export class App {
  display = this.carService.getcars().join('⭐️ ');
  carService=inject(CarService)
}

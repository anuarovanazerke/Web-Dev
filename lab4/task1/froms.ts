import {Component} from '@angular/core';
import {formsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
 
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">Favorite Framework:
        <input id="farmework" type="text" [(ngModel)]="favoriteFrameork"/>
    </label>
  `,
  imports: [FormsModule],
})
export class User {
  username = 'youngTech';
  
  favoriteFramework = '';
}
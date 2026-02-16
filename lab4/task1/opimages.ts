import {Component} from '@angular/core';
import {NgOptimazedImages} from '@angular/common';
@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo"  width="32"  height="32"/>
      </li>
      <li>
        Dynamic Image:
        <img [nGSrc]="logoUrl" [alt]="logoAlt" width="32"  height="32"/>
      </li>
    </ul>

  `,
  imports: [NgOptimazedImages],
})
export class User {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
import {Component} from '@angular/core';
import {RouterLink,RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerlink="/">Home</a>
      |
      <a routerlink="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterLink,RouterOutlet],
})
export class App {}
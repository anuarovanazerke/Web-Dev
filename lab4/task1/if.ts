@Component({
    ...
    template: `
      @if (isLoggedIn) {
        <p>Welcome back, Friend!</p>
      }
    `,
  })
  export class App {
    isLoggedIn = true;
  }


import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  @if(isServerrunning){
    <span>Yes, the server is running</span> }@else{
        <span>No,the server is not running</span>}
    }
    `,
})
export class App {
  isServerRunning=true;
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section(mouseover)="showSecretmessage">
      There's a secret message for you,hover to reveal:
      {{message}}
    </section>
  `,
})
export class App {
    message='';
    showSecretmessage(){
        this.message="Way to go 🚀";
}
}
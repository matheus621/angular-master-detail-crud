import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'finansys';
  show = 'Porra Michael';
  
  constructor() {
  }

  metodo(event) {
    console.log(event);
    this.show = event.target.value;
  }

}

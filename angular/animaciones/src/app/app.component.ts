import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cambiaColor', [
      state('rojo', style({
        backgroundColor: 'red'
      })),
      state('naranja', style({
        backgroundColor: 'orange'
      })),
      state('verde', style({
        backgroundColor: 'green',
        transform: 'scale(1.5)'
      })),
      // transition('naranja => verde', animate('.5s ease-out'))
      transition('void => *', [
        style({ transform: 'translateX(-300%)' }),
        animate('4s')
      ]),
      transition('* => *', animate(1000))
    ])
  ]
})
export class AppComponent {
  title = 'animaciones';

  color: string;

  constructor() {
    this.color = 'rojo';
  }

  cambioColor() {
    if (this.color == 'rojo') {
      this.color = 'naranja';
    } else if (this.color == 'naranja') {
      this.color = 'verde';
    } else {
      this.color = 'rojo';
    }
  }
}

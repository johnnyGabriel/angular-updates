import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-effect',
  imports: [],
  templateUrl: './signal-effect.component.html',
  styleUrl: './signal-effect.component.css'
})
export class SignalEffectComponent {

  readonly counter = signal(0);

  constructor() {
    
    effect(() => {
      if (this.counter() !== 0) {
        window.alert(`Signal Effect, value changed: ${this.counter()}`);
      }
    });

  }

  increment() {
    this.counter.update(value => value + 1);
  }

}

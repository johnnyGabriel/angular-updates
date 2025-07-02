import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-computed',
  imports: [],
  templateUrl: './signal-computed.component.html',
  styleUrl: './signal-computed.component.css'
})
export class SignalComputedComponent {

  readonly counter = signal(0);

  readonly message = computed(() => {
    return `Computed signal using counter: ${this.counter()}`;
  });

  increment() {
    this.counter.update(value => value + 1);
  }
  
}

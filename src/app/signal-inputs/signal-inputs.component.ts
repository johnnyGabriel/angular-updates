import { Component, input, output } from '@angular/core';
import { clear } from 'console';

@Component({
  selector: 'app-signal-inputs',
  imports: [],
  templateUrl: './signal-inputs.component.html',
  styleUrl: './signal-inputs.component.css'
})
export class SignalInputsComponent {

  readonly title = input<string>('Default Title');
  readonly text = input.required<string>();

  readonly customEvent = output<string>();

  timer: any;

  constructor() {
    this.timer = setTimeout(() => {
      this.customEvent.emit('Custom event triggered from SignalInputsComponent');
    }, 3000);
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

}

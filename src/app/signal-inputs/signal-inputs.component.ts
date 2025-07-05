import { Component, input, output } from '@angular/core';

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

  triggerOutput() {
    this.customEvent.emit('Custom event triggered from SignalInputsComponent');
  }

}

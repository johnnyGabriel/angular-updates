import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-control-flow',
  imports: [AsyncPipe],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  readonly list = signal([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' }
  ]);

  readonly user$ = new BehaviorSubject('John Doe');

  clean() {
    this.list.set([]);
  }

}

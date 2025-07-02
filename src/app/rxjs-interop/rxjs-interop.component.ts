import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { of, delay } from 'rxjs';

@Component({
  selector: 'app-rxjs-interop',
  imports: [JsonPipe],
  templateUrl: './rxjs-interop.component.html',
  styleUrl: './rxjs-interop.component.css'
})
export class RxjsInteropComponent {

  data$ = of({ text: 'bla bla' }).pipe(delay(1000));

  data = toSignal(this.data$, { initialValue: null });

}

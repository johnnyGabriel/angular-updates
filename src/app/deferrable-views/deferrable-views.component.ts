import { Component, signal } from '@angular/core';
import { ExampleComponent } from './example/example.component';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { timer } from 'rxjs';

type DeferType = 
  'loadingOnHover' | 
  'loadingOnViewport' |
  'loadingOnInteraction' |
  'loadingOnIdle' |
  'loadingOnImmediate' |
  'loadingOnTimer' |
  'loadingOnWhen'

@Component({
  selector: 'app-deferrable-views',
  imports: [ExampleComponent, NgTemplateOutlet, AsyncPipe],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.css'
})
export class DeferrableViewsComponent {

  readonly deferTemplate = signal<DeferType>('loadingOnHover');
  
  readonly counter$ = timer(0, 1000);

}

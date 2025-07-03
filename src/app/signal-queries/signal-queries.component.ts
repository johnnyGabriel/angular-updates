import { Component, contentChild, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-signal-queries',
  imports: [],
  templateUrl: './signal-queries.component.html',
  styleUrl: './signal-queries.component.css'
})
export class SignalQueriesComponent {

  templateRef = viewChild<ElementRef<HTMLParagraphElement>>('template');
  contentRef = contentChild<ElementRef<HTMLParagraphElement>>('content');

}

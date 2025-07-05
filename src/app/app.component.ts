import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { StateService } from './state.service';

import { ModelInputsComponent } from "./model-inputs/model-inputs.component";
import { SignalInputsComponent } from "./signal-inputs/signal-inputs.component";
import { SignalQueriesComponent } from "./signal-queries/signal-queries.component";
import { SignalEffectComponent } from "./signal-effect/signal-effect.component";
import { SignalComputedComponent } from "./signal-computed/signal-computed.component";
import { LinkedSignalComponent } from "./linked-signal/linked-signal.component";
import { ControlFlowComponent } from "./control-flow/control-flow.component";
import { DeferrableViewsComponent } from "./deferrable-views/deferrable-views.component";
import { ResourcesComponent } from "./resources/resources.component";
import { RxjsInteropComponent } from "./rxjs-interop/rxjs-interop.component";

@Component({
  selector: 'app-root',
  imports: [
    ModelInputsComponent,
    SignalInputsComponent,
    SignalQueriesComponent,
    SignalEffectComponent,
    SignalComputedComponent,
    LinkedSignalComponent,
    ControlFlowComponent,
    DeferrableViewsComponent,
    ResourcesComponent,
    RxjsInteropComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  stateService = inject(StateService);
  
  state = this.stateService.state;

  modelInputValue = signal('value from app.component');

  constructor() {}

  handleCustomEvent(e: string) {
    window.alert(`Custom event received: ${e}`);
  }

}

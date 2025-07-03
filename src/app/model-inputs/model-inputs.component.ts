import { Component, model } from '@angular/core';

@Component({
  selector: 'app-model-inputs',
  imports: [],
  templateUrl: './model-inputs.component.html',
  styleUrl: './model-inputs.component.css',
})
export class ModelInputsComponent {
  
  readonly defaultValue = 'default value';

  value = model(this.defaultValue);

  handleInput(e: Event) {
    this.value.set((e.target as HTMLInputElement).value);
  }

  reset() {
    this.value.set(this.defaultValue);
  }
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _state = signal<{ list: Array<{ name: string }> }>({ list: [] });

  state = this._state.asReadonly();

  constructor() { }

  updateState(newState: any) {
    this._state.set(newState);
  }

}

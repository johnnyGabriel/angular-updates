import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

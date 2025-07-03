import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalComputedComponent } from './signal-computed.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SignalComputedComponent', () => {
  let component: SignalComputedComponent;
  let fixture: ComponentFixture<SignalComputedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalComputedComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalComputedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

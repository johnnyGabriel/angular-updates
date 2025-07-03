import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputsComponent } from './signal-inputs.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SignalInputsComponent', () => {
  let component: SignalInputsComponent;
  let fixture: ComponentFixture<SignalInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInputsComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInputsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('text', 'some text');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

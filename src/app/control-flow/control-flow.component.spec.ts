import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowComponent } from './control-flow.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ControlFlowComponent', () => {
  let component: ControlFlowComponent;
  let fixture: ComponentFixture<ControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

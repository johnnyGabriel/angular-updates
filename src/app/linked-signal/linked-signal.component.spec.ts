import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedSignalComponent } from './linked-signal.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LinkedSignalComponent', () => {
  let component: LinkedSignalComponent;
  let fixture: ComponentFixture<LinkedSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedSignalComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalQueriesComponent } from './signal-queries.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SignalQueriesComponent', () => {
  let component: SignalQueriesComponent;
  let fixture: ComponentFixture<SignalQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalQueriesComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

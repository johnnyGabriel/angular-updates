import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrableViewsComponent } from './deferrable-views.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('DeferrableViewsComponent', () => {
  let component: DeferrableViewsComponent;
  let fixture: ComponentFixture<DeferrableViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrableViewsComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferrableViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

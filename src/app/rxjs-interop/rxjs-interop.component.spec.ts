import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsInteropComponent } from './rxjs-interop.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('RxjsInteropComponent', () => {
  let component: RxjsInteropComponent;
  let fixture: ComponentFixture<RxjsInteropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsInteropComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsInteropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

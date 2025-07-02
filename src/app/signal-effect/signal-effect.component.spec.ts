import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEffectComponent } from './signal-effect.component';

describe('SignalEffectComponent', () => {
  let component: SignalEffectComponent;
  let fixture: ComponentFixture<SignalEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

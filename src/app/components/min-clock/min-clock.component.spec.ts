import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinClockComponent } from './min-clock.component';

describe('MinClockComponent', () => {
  let component: MinClockComponent;
  let fixture: ComponentFixture<MinClockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinClockComponent]
    });
    fixture = TestBed.createComponent(MinClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

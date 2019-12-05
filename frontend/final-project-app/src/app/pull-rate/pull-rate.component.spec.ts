import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRateComponent } from './pull-rate.component';

describe('PullRateComponent', () => {
  let component: PullRateComponent;
  let fixture: ComponentFixture<PullRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

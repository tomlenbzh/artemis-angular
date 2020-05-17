import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoCoachingComponent } from './ceo-coaching.component';

describe('CeoCoachingComponent', () => {
  let component: CeoCoachingComponent;
  let fixture: ComponentFixture<CeoCoachingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoCoachingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

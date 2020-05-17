import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationCoachingComponent } from './organisation-coaching.component';

describe('OrganisationCoachingComponent', () => {
  let component: OrganisationCoachingComponent;
  let fixture: ComponentFixture<OrganisationCoachingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationCoachingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

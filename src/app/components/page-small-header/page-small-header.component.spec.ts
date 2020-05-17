import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSmallHeaderComponent } from './page-small-header.component';

describe('PageSmallHeaderComponent', () => {
  let component: PageSmallHeaderComponent;
  let fixture: ComponentFixture<PageSmallHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSmallHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSmallHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

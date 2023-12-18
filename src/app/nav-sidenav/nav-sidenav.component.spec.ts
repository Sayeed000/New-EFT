import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSidenavComponent } from './nav-sidenav.component';

describe('NavSidenavComponent', () => {
  let component: NavSidenavComponent;
  let fixture: ComponentFixture<NavSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavSidenavComponent]
    });
    fixture = TestBed.createComponent(NavSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

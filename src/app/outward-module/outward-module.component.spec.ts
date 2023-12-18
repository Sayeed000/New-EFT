import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardModuleComponent } from './outward-module.component';

describe('OutwardModuleComponent', () => {
  let component: OutwardModuleComponent;
  let fixture: ComponentFixture<OutwardModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutwardModuleComponent]
    });
    fixture = TestBed.createComponent(OutwardModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

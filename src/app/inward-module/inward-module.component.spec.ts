import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardModuleComponent } from './inward-module.component';

describe('InwardModuleComponent', () => {
  let component: InwardModuleComponent;
  let fixture: ComponentFixture<InwardModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InwardModuleComponent]
    });
    fixture = TestBed.createComponent(InwardModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

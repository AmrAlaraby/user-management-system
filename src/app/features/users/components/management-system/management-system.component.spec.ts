import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSystemComponent } from './management-system.component';

describe('ManagementSystemComponent', () => {
  let component: ManagementSystemComponent;
  let fixture: ComponentFixture<ManagementSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementSystemComponent]
    });
    fixture = TestBed.createComponent(ManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyHolderComponent } from './policy-holder.component';

describe('PolicyHolderComponent', () => {
  let component: PolicyHolderComponent;
  let fixture: ComponentFixture<PolicyHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyHolderComponent]
    });
    fixture = TestBed.createComponent(PolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

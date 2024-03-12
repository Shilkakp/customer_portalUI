import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyloginComponent } from './policylogin.component';

describe('PolicyloginComponent', () => {
  let component: PolicyloginComponent;
  let fixture: ComponentFixture<PolicyloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyloginComponent]
    });
    fixture = TestBed.createComponent(PolicyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

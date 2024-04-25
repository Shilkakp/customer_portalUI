import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePolicyComponent } from './remove-policy.component';

describe('RemovePolicyComponent', () => {
  let component: RemovePolicyComponent;
  let fixture: ComponentFixture<RemovePolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemovePolicyComponent]
    });
    fixture = TestBed.createComponent(RemovePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

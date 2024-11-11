import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVerificationStatusComponent } from './add-verification-status.component';

describe('AddVerificationStatusComponent', () => {
  let component: AddVerificationStatusComponent;
  let fixture: ComponentFixture<AddVerificationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVerificationStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVerificationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

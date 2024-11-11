import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditDocumentTypeComponent } from './addedit-document-type.component';

describe('AddeditDocumentTypeComponent', () => {
  let component: AddeditDocumentTypeComponent;
  let fixture: ComponentFixture<AddeditDocumentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddeditDocumentTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddeditDocumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

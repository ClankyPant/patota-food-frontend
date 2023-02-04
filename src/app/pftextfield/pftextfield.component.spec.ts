import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PFTextfieldComponent } from './pftextfield.component';

describe('PFTextfieldComponent', () => {
  let component: PFTextfieldComponent;
  let fixture: ComponentFixture<PFTextfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PFTextfieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PFTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

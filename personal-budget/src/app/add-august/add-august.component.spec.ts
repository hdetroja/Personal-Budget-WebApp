import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAugustComponent } from './add-august.component';

describe('AddAugustComponent', () => {
  let component: AddAugustComponent;
  let fixture: ComponentFixture<AddAugustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAugustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAugustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

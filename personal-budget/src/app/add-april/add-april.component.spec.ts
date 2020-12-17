import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAprilComponent } from './add-april.component';

describe('AddAprilComponent', () => {
  let component: AddAprilComponent;
  let fixture: ComponentFixture<AddAprilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAprilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAprilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMayComponent } from './add-may.component';

describe('AddMayComponent', () => {
  let component: AddMayComponent;
  let fixture: ComponentFixture<AddMayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

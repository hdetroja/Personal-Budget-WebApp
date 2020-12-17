import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarchComponent } from './add-march.component';

describe('AddMarchComponent', () => {
  let component: AddMarchComponent;
  let fixture: ComponentFixture<AddMarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

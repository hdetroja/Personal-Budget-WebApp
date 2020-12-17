import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJanuaryComponent } from './add-january.component';

describe('AddJanuaryComponent', () => {
  let component: AddJanuaryComponent;
  let fixture: ComponentFixture<AddJanuaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJanuaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJanuaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

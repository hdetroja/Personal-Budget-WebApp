import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJulyComponent } from './add-july.component';

describe('AddJulyComponent', () => {
  let component: AddJulyComponent;
  let fixture: ComponentFixture<AddJulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJulyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

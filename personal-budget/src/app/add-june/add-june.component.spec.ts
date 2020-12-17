import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJuneComponent } from './add-june.component';

describe('AddJuneComponent', () => {
  let component: AddJuneComponent;
  let fixture: ComponentFixture<AddJuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

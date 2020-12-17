import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeptemberComponent } from './add-september.component';

describe('AddSeptemberComponent', () => {
  let component: AddSeptemberComponent;
  let fixture: ComponentFixture<AddSeptemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSeptemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSeptemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

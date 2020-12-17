import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDecemberComponent } from './add-december.component';

describe('AddDecemberComponent', () => {
  let component: AddDecemberComponent;
  let fixture: ComponentFixture<AddDecemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDecemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDecemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

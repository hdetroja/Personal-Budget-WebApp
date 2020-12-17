import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFebruaryComponent } from './add-february.component';

describe('AddFebruaryComponent', () => {
  let component: AddFebruaryComponent;
  let fixture: ComponentFixture<AddFebruaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFebruaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFebruaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

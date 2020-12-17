import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOctoberComponent } from './add-october.component';

describe('AddOctoberComponent', () => {
  let component: AddOctoberComponent;
  let fixture: ComponentFixture<AddOctoberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOctoberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOctoberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

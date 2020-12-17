import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNovemberComponent } from './add-november.component';

describe('AddNovemberComponent', () => {
  let component: AddNovemberComponent;
  let fixture: ComponentFixture<AddNovemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNovemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNovemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

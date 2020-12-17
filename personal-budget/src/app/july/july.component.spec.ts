import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JulyComponent } from './july.component';

describe('JulyComponent', () => {
  let component: JulyComponent;
  let fixture: ComponentFixture<JulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JulyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

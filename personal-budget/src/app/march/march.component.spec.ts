import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchComponent } from './march.component';

describe('MarchComponent', () => {
  let component: MarchComponent;
  let fixture: ComponentFixture<MarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

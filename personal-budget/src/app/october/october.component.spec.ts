import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoberComponent } from './october.component';

describe('OctoberComponent', () => {
  let component: OctoberComponent;
  let fixture: ComponentFixture<OctoberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctoberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctoberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

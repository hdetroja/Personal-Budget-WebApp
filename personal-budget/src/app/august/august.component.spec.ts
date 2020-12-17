import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugustComponent } from './august.component';

describe('AugustComponent', () => {
  let component: AugustComponent;
  let fixture: ComponentFixture<AugustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AugustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AugustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

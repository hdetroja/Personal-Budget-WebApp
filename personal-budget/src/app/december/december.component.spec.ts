import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecemberComponent } from './december.component';

describe('DecemberComponent', () => {
  let component: DecemberComponent;
  let fixture: ComponentFixture<DecemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

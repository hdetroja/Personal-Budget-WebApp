import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptemberComponent } from './september.component';

describe('SeptemberComponent', () => {
  let component: SeptemberComponent;
  let fixture: ComponentFixture<SeptemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeptemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

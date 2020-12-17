import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovemberComponent } from './november.component';

describe('NovemberComponent', () => {
  let component: NovemberComponent;
  let fixture: ComponentFixture<NovemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

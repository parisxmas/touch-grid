import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchGridComponent } from './touch-grid.component';

describe('TouchGridComponent', () => {
  let component: TouchGridComponent;
  let fixture: ComponentFixture<TouchGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouchGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15Component } from './day15.component';

describe('Day15Component', () => {
  let component: Day15Component;
  let fixture: ComponentFixture<Day15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

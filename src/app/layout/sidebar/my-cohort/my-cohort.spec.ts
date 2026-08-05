import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCohort } from './my-cohort';

describe('MyCohort', () => {
  let component: MyCohort;
  let fixture: ComponentFixture<MyCohort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCohort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCohort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

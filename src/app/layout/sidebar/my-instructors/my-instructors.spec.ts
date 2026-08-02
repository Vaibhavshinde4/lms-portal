import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInstructors } from './my-instructors';

describe('MyInstructors', () => {
  let component: MyInstructors;
  let fixture: ComponentFixture<MyInstructors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInstructors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInstructors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

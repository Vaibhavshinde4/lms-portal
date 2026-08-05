import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClimb } from './my-climb';

describe('MyClimb', () => {
  let component: MyClimb;
  let fixture: ComponentFixture<MyClimb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyClimb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyClimb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

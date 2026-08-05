import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toolbelt } from './toolbelt';

describe('Toolbelt', () => {
  let component: Toolbelt;
  let fixture: ComponentFixture<Toolbelt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toolbelt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toolbelt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

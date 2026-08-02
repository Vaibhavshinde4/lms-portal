import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCertification } from './progress-certification';

describe('ProgressCertification', () => {
  let component: ProgressCertification;
  let fixture: ComponentFixture<ProgressCertification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressCertification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressCertification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

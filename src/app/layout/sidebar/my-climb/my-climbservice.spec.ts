import { TestBed } from '@angular/core/testing';

import { MyClimbservice } from './my-climbservice';

describe('MyClimbservice', () => {
  let service: MyClimbservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyClimbservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

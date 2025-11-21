import { TestBed } from '@angular/core/testing';

import { Businesses } from './businesses';

describe('Businesses', () => {
  let service: Businesses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Businesses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

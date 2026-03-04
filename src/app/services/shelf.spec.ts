import { TestBed } from '@angular/core/testing';

import { Shelf } from './shelf';

describe('Shelf', () => {
  let service: Shelf;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shelf);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

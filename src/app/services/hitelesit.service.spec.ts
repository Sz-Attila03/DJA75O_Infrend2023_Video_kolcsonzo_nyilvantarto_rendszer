import { TestBed } from '@angular/core/testing';

import { HitelesitService } from './hitelesit.service';

describe('HitelesitService', () => {
  let service: HitelesitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HitelesitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

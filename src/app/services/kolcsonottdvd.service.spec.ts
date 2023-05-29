import { TestBed } from '@angular/core/testing';

import { KolcsonottdvdService } from './kolcsonottdvd.service';

describe('KolcsonottdvdService', () => {
  let service: KolcsonottdvdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KolcsonottdvdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

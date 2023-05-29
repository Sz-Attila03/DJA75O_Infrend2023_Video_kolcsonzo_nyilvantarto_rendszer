import { TestBed } from '@angular/core/testing';

import { KolcsonzottkazetaService } from './kolcsonzottkazeta.service';

describe('KolcsonzottkazetaService', () => {
  let service: KolcsonzottkazetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KolcsonzottkazetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

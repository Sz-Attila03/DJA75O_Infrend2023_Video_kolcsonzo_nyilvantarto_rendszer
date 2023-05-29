import { TestBed } from '@angular/core/testing';

import { KazetakService } from './kazetak.service';

describe('KazetakService', () => {
  let service: KazetakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KazetakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

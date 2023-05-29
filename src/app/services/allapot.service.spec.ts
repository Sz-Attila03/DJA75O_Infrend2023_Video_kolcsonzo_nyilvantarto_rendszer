import { TestBed } from '@angular/core/testing';

import { AllapotService } from './allapot.service';

describe('AllapotService', () => {
  let service: AllapotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllapotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

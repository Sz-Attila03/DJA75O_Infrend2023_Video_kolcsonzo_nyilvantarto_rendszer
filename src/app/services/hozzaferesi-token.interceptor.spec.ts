import { TestBed } from '@angular/core/testing';

import { HozzaferesiTokenInterceptor } from './hozzaferesi-token.interceptor';

describe('HozzaferesiTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HozzaferesiTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HozzaferesiTokenInterceptor = TestBed.inject(HozzaferesiTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

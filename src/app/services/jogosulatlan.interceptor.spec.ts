import { TestBed } from '@angular/core/testing';

import { JogosulatlanInterceptor } from './jogosulatlan.interceptor';

describe('JogosulatlanInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JogosulatlanInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JogosulatlanInterceptor = TestBed.inject(JogosulatlanInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

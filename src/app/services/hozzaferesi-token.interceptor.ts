import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HitelesitService } from './hitelesit.service';

@Injectable()
export class HozzaferesiTokenInterceptor implements HttpInterceptor {

  constructor( private hitelesitoService: HitelesitService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const accessToken = this.hitelesitoService.getToken();

    const atalakitottKeres = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return next.handle(atalakitottKeres);
  }
}

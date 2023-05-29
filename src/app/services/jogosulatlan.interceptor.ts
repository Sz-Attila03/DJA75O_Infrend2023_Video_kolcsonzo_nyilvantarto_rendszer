import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { HitelesitService } from './hitelesit.service';
import { Router } from '@angular/router';

@Injectable()
export class JogosulatlanInterceptor implements HttpInterceptor {

  constructor( private hitelesitoService: HitelesitService, private router: Router ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError( (err) => {
        if(err instanceof HttpErrorResponse && err.status === 401)
        {
          this.hitelesitoService.removeToken();
          this.router.navigateByUrl('/bejelentkezes')
        }
        throw err;
      } )
    );

  }
}

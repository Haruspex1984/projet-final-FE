import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {LoginService} from "../services/login/login.service";
import {Router} from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService : LoginService,private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.loginService.getAuthToken();

    if (token) {
      let clone = request.clone({
        setHeaders: {Authorization: `Authorization token ${token}`}
      });
      return next.handle(clone).pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/login']).then()

            }
          }
          return throwError(err);
        })
      )
    }
    console.log("ICI")
    return next.handle(request)

  }
}






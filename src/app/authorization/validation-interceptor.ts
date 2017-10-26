import { Injectable } from '@angular/core';
import { HttpEvent, 
         HttpInterceptor, 
         HttpHandler, 
         HttpRequest, 
         HttpResponse, 
         HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

// setup to route properly for validation

@Injectable()
export class ValidationInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  nav(location: string){
    this.router.navigate([location]);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && event.body && event.body.message === 'Authorized') {
        this.nav(`/profile/${event.body.id}`);
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          this.nav('/login');
          // and show a modal
        }
      }
    });
  }
}

// authentication token example

// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private auth: AuthService) {}
 
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Get the auth header from the service.
//     const authHeader = this.auth.getAuthorizationHeader();
//     // Clone the request to add the new header.
//     const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
//     // Pass on the cloned request instead of the original request.
//     return next.handle(authReq);
//   }
// }
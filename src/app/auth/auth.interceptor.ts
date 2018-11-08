import { Injectable, Injector } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   const auth = this.injector.get(AuthService);
    console.log('token', auth.getToken());
    const authHeader = `Bearer ${auth.getToken()}`;
    const authReq = req.clone({
      headers: req.headers.set('authorization', authHeader),
    });
    return next.handle(authReq);
  }

}


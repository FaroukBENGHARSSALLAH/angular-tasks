import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateService } from '../services/state.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private stateService: StateService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let clonedRequest: HttpRequest<unknown> = ( !this.stateService.authenticationState.isAuthenticated ) ? request : request.clone({
      headers : request.headers.set('Authorization', `Bearer ${this.stateService.authenticationState.token}`)
    });
    return next.handle(clonedRequest);
  }
}
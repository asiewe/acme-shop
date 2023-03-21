import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';
import { EmitEvent, EventBusService, Events } from '../services/event-bus.service';


@Injectable({providedIn: 'root'})
export class OverlayRequestResponseInterceptor implements HttpInterceptor {

  constructor(private eventBus: EventBusService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.eventBus.emit(new EmitEvent(Events.httpRequest));
    return next
          .handle(req)
          .pipe(
            tap(event => {
              if (event instanceof HttpResponse) {
                this.eventBus.emit(new EmitEvent(Events.httpResponse));
              }
            }),
            catchError(err => {
              this.eventBus.emit(new EmitEvent(Events.httpResponse));
              return of({}) as Observable<HttpEvent<any>>;
            })
          );
  }

  getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

}

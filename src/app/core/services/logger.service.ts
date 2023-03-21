import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(msg: string, ...rest: any) {
      if (!environment.production) {
          console.log(msg, rest);
      }
      else {
          // AppInsights
      }

  }

  logError(msg: string) {
      if (!environment.production) {
          console.error(msg);
      }
      else {
          // AppInsights
      }

  }
}

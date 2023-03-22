import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AppConfig } from 'src/app/shared/models/AppConfig';


@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  appConfig: AppConfig
  private appConfigSubject: BehaviorSubject<AppConfig>
  appConfig$: Observable<AppConfig>

  constructor() {
    this.appConfig = {
      isDarkMode: true
    }

    this.appConfigSubject = new BehaviorSubject<AppConfig>(this.appConfig)
    this.appConfig$ = this.appConfigSubject.asObservable()
  }

  updateConfig(config: Partial<AppConfig>) {
    this.appConfig = {...this.appConfig, ...config}
    this.appConfigSubject.next(this.appConfig)
  }

}

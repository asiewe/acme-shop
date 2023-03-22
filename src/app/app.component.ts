import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppConfigService } from './core/services/app-config/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acme-bookstore';
  isDarkMode$: Observable<boolean>
  
  constructor(private appConfigService: AppConfigService) {
    this.isDarkMode$ = this.appConfigService.appConfig$.pipe(map(appConfig => appConfig.isDarkMode))
  }
}

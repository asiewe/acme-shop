import { Component, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, tap, combineLatest} from 'rxjs';
import { User } from 'src/app/shared/models/User';
import { LoginComponent } from '../login/login.component';
import { AppConfigService } from '../services/app-config/app-config.service';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  vm$: Observable<{
    isDarkMode: boolean,
    currentUser:  User, 
    numberOfItems:  number
  }>

  constructor(private cartService: CartService, private authService: AuthService, private dialog: MatDialog, private appConfigService: AppConfigService) {
    this.vm$ = combineLatest([this.appConfigService.appConfig$.pipe(map(appConfig => appConfig.isDarkMode)),this.authService.currentUser$, this.cartService.cart$.pipe(map(cart => cart.totalProducts))]).pipe(
      map(result => ({
        isDarkMode: result[0],
        currentUser: result[1],
        numberOfItems: result[2],
      }))
    )
  }

  login() {
    this.dialog.open(LoginComponent)
  }

  toggleTheme() {
    this.appConfigService.updateConfig({isDarkMode: !this.appConfigService.appConfig.isDarkMode})
  }
}

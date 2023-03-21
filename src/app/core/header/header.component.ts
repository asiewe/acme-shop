import { Component, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, tap, combineLatest} from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private cartService: CartService, private authService: AuthService, private dialog: MatDialog) {
  }

  numberOfItems$ = this.cartService.cart$
    .pipe(map(cart => cart.totalProducts))

  vm$ = combineLatest({currentUser: this.authService.currentUser$, numberOfItems: this.numberOfItems$})

  login() {
    this.dialog.open(LoginComponent)
  }
}

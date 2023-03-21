import { Component } from '@angular/core';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-user-carts',
  templateUrl: './user-carts.component.html',
  styleUrls: ['./user-carts.component.css']
})
export class UserCartsComponent {

  constructor(private cartService: CartService) {
    
  }

  cart$ = this.cartService.cart$
}

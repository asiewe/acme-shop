import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, of, switchMap, pipe } from 'rxjs';
import { Cart } from 'src/app/shared/models/Cart';
import { Product } from 'src/app/shared/models/Product';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable(
  {providedIn: 'root'}
)
export class CartService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  cart$ = this.http.get<any>(`${environment.apiBasePath}/carts/user/${this.authService.currentUser.id}`)
    .pipe(
      map(userCarts => userCarts.carts[0] as Cart),
      this.getCartProducts(),
    )

  getCartProducts() {
    return pipe(
      switchMap((data: Cart) => forkJoin([of(data), ...data.products.map(product => this.http.get<Product>(`${environment.apiBasePath}/products/${product.id}`))])),
      map(result => {
        const cart = result[0]
        cart.products = cart.products.map((product, index) => {
          return { ...result[index + 1] as Product, quantity: product.quantity, total: product.total }
        })

        return cart
      }))
  }

  addProductToCart(product: Product) {
    // this.cart.products.push({ product, quantity })
    // this.cartSubject.next(this.cart)
  }

  removeProductFromCart(productId: number) {
    // const indexProductToDelete = this.cart.products.findIndex(cartItem => cartItem.product.id === productId)
    // if (indexProductToDelete !== -1) {
    //   this.cart.products.splice(indexProductToDelete, 1)
    //   this.cartSubject.next(JSON.parse(JSON.stringify(this.cart)))
    // }
  }
}

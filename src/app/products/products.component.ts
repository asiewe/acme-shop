import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, combineLatest, map, of } from 'rxjs';
import { CartService } from '../core/services/cart.service';
import { ProductService } from '../core/services/product.service';
import { Product } from '../shared/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }

  private selectedCategorySubject = new BehaviorSubject<string | undefined>(undefined)
  selectedCategoryAction$ = this.selectedCategorySubject.asObservable()

  products$ = combineLatest([this.productService.products$, this.selectedCategoryAction$])
    .pipe(
      map(([products, category]) => {
        return products.filter(product => {
          return category ? product.category === category : true
        })
      }),
      catchError(this.onError)
    )

  productCategories$ = this.productService.productCategories$.pipe(catchError(this.onError))

  onSelectCategory(category: string) {
    this.selectedCategorySubject.next(category)
  }

  onReload() {
    this.productService.refreshProducts()
  }

  onSearch(searchValue: string) {
    this.productService.searchProducts(searchValue)
  }

  onAddToCart(product: Product) {
    this.cartService.addProductToCart(product)
  }

  onSelectProduct(product: Product) {
    this.router.navigate(['/products', product.id, 'details'])
  }

  onError(err: Error) {
    return of([])
  }

}

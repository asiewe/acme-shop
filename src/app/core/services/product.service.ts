import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoggerService } from 'src/app/core/services/logger.service';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/shared/models/Product';
import { Observable, map, tap, BehaviorSubject, switchMap, combineLatest, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private logger: LoggerService, private http: HttpClient) {
  }


  private refreshProductsSubject = new BehaviorSubject<void>(undefined)
  private searchProductSubject = new BehaviorSubject<string>('')
  private productSelectedSubject = new BehaviorSubject<number | undefined>(undefined)

  productSelectedAction$ = this.productSelectedSubject.asObservable()
  selectedProduct$ = this.productSelectedAction$
    .pipe(
      switchMap(productId => this.http.get<Product>(`${environment.apiBasePath}/products/${productId}`)),
    )

  products$: Observable<Product[]> = combineLatest([this.refreshProductsSubject, this.searchProductSubject])
    .pipe(
      switchMap(([_, searchInput]) => {
        const api = `${environment.apiBasePath}/products${searchInput && searchInput.trim() !== '' ? `/search?q=${searchInput}` : ''}`
        return this.http.get<any[]>(api)
      }),
      map((data: any) => {
        return data.products
      })
    )

  productCategories$ = this.http.get<string[]>(`${environment.apiBasePath}/products/categories`)


  refreshProducts() {
    this.refreshProductsSubject.next()
  }

  searchProducts(searchInput: string) {
    this.searchProductSubject.next(searchInput)
  }

  selectedProductChanged(productId: number) {
    this.productSelectedSubject.next(productId)
  }


  getProduct(productId: number) {
    return this.http.get<Product>(`${environment.apiBasePath}/products/${productId}`)
  }

  updateProduct(productId: number, product: Partial<Product>) {
    return this.http.patch(`${environment.apiBasePath}/products/${productId}`, product)
  }
}

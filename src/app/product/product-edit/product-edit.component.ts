import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from 'rxjs'
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product$!: Observable<Product>;
  
  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.product$ = this.route.parent!.paramMap.pipe(
      switchMap(params => {
        const productId = params.get('id')
        return this.productService.getProduct(+productId!)
      }))
  }
}

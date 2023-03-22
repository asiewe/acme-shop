import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product$!: Observable<Product>;

  constructor(private route: ActivatedRoute, private productService: ProductService,private router: Router) {
  }

  ngOnInit(): void {
    this.product$ = this.route.parent!.paramMap.pipe(
      switchMap(params => {
        const productId = params.get('id')
        return this.productService.getProduct(+productId!)
      }),
      )
  }

  edit(product: Product) {
    this.router.navigate([`/products/${product.id}/edit`])
  }
}

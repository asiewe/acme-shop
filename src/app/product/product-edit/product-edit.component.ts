import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, map, Observable, Subscription, switchMap } from 'rxjs'
import { ProductService } from 'src/app/core/services/product.service';
import { GenericValidator } from 'src/app/shared/helpers/generic-validator';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy  {
  productForm!: FormGroup
  product!: Product
  productSub!: Subscription
  updateProductSub?: Subscription

  constructor(private route: ActivatedRoute, private productService: ProductService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(1)]],
      discountPercentage: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      brand: [null, Validators.required],
      category: [null, Validators.required],
    })

    this.productSub = this.route.parent!.paramMap.pipe(
      switchMap(params => {
        const productId = params.get('id')
        return this.productService.getProduct(+productId!)
      })
    ).subscribe(product => {
      this.product = product
      this.productForm.setValue({
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
      })
    })
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe()
    this.updateProductSub?.unsubscribe()
  }

  onSave() {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        const requestPayload = this.productForm.value
        this.productService.updateProduct(this.product.id, requestPayload).subscribe({
          next: () => this.onSaveCompleted(),
          error: (err) => console.log(err),
        })
      } else {
        this.onSaveCompleted()
      }
    }
  }

  onSaveCompleted() {
    this.router.navigate(['products', this.product.id, 'details'])
  }

  cancelEdit() {
    this.router.navigate(['products', this.product.id, 'details'])
  }
}

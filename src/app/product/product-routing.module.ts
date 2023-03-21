import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: 'details', component: ProductDetailsComponent },
      {
        path: 'edit', component: ProductEditComponent, canDeactivate: [(component: ProductEditComponent) => {
          if(component.productForm.dirty) {
            const productName = component.productForm.get('title')?.value || 'New Product';
            return confirm(`Navigate away and lose all changes to ${productName}?`);
          }
          return true
        }
      ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

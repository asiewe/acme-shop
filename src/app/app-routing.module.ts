import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/products'
  },
  {
    path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'products/:id', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'me', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

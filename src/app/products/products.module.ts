import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }

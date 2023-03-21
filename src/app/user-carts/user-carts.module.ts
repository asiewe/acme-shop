import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCartsRoutingModule } from './user-carts-routing.module';
import { UserCartsComponent } from './user-carts.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    UserCartsComponent
  ],
  imports: [
    CommonModule,
    UserCartsRoutingModule,
    MatListModule,
    MatDividerModule,
    MatInputModule
  ]
})
export class UserCartsModule { }

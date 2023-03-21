import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCartsComponent } from './user-carts.component';

const routes: Routes = [
  {
    path: '', component: UserCartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCartsRoutingModule { }

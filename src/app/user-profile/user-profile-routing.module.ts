import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCartsComponent } from '../user-carts/user-carts.component';
import { UserPostsComponent } from '../user-posts/user-posts.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    children: [
      { path: 'profile', component: UserDetailsComponent },
      { path: 'cart', component: UserCartsComponent },
      { path: 'posts', component: UserPostsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }

export class UserProfileModuleComponents {
  static compoments = [UserProfileComponent]
}

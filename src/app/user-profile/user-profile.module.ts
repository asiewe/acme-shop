import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UserCartsModule } from '../user-carts/user-carts.module';
import { UserPostsModule } from '../user-posts/user-posts.module';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserProfileRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    UserCartsModule,
    UserPostsModule,
  ]
})
export class UserProfileModule { }

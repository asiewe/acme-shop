import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './services/logger.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { AuthService } from './services/auth.service';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  providers: [LoggerService, ProductService, AuthService, UserService],
  exports: [HttpClientModule, HeaderComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatDialogModule
  ]
})
export class CoreModule { }

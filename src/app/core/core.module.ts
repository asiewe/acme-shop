import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { SharedModule } from '../shared/shared.module';
import { OverlayModule } from './overlay/overlay.module';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  exports: [HttpClientModule, HeaderComponent, LoginComponent, OverlayModule],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    OverlayModule,
    SharedModule,
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard { // Ensure that CoreModule is only loaded into AppModule
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, // Main routes for application
    SharedModule,  // Shared (multi-instance) objects
    CoreModule, // Singleton objects (services, components that are loaded only once, etc.)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

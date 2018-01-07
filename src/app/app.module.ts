import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CryptoComponent } from './crypto/crypto.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

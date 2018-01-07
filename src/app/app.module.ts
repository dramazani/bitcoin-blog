import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CryptoComponent } from './crypto/crypto.component';
import { SiteComponent } from './site/site.component';
import { DevopsComponent } from './devops/devops.component';
import { ChanComponent } from './chan/chan.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    CryptoComponent,
    SiteComponent,
    DevopsComponent,
    ChanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

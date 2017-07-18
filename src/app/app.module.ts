import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {ProductsComponent} from './products/products.component';
import {AboutComponent} from './about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routes} from './app.routes';
import { SafeComponent } from './safe/safe.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { GetYourPasswordHereComponent } from './get-your-password-here/get-your-password-here.component';
import { NoMorePhishingComponent } from './no-more-phishing/no-more-phishing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    IntroductionComponent,
    AboutComponent,
    SafeComponent,
    GettingStartedComponent,
    GetYourPasswordHereComponent,
    NoMorePhishingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

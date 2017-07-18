import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProductsComponent } from './products/products.component';
import { SafeComponent } from './safe/safe.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { GetYourPasswordHereComponent } from './get-your-password-here/get-your-password-here.component';
import { NoMorePhishingComponent } from './no-more-phishing/no-more-phishing.component';

export const router: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'introduction', component: IntroductionComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'safe', component: SafeComponent},
  { path: 'getting-started', component: GettingStartedComponent},
  { path: 'get-your-password-here', component: GetYourPasswordHereComponent},
  { path: 'no-more-phishing', component: NoMorePhishingComponent},
]
export const routes: ModuleWithProviders = RouterModule.forRoot(router);

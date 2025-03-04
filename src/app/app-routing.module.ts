import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesforSaleComponent } from './modules/Categories/MainCategories/vehicles/subCategories/vehicles-for-sale/vehicles-for-sale.component';
import { VehiclesComponent } from './modules/Categories/MainCategories/vehicles/vehicles.component';
import { HomePageComponent } from './modules/Homepage/home-page/home-page.component';
import { SingleProductPageComponent } from './modules/Categories/MainCategories/shared/single-product-page/single-product-page.component';
import { CreateStep1Component } from './modules/ProductCreate/create-step1/create-step1.component';
import { CreateStep2Component } from './modules/ProductCreate/create-step2/create-step2.component';
import { CreateStep3Component } from './modules/ProductCreate/create-step3/create-step3.component';
import { LoginComponent } from './modules/Homepage/login/login.component';
import { productResolver } from './core/services/productResolver.service';
import { AboutComponent } from './modules/layout/footer/footer-pages/about/about.component';
import { AdvertisingServicesComponent } from './modules/layout/footer/footer-pages/advertising-services/advertising-services/advertising-services.component';
import { SiteMapComponent } from './modules/layout/footer/footer-pages/site-map/site-map/site-map.component';
import { HelpComponent } from './modules/layout/footer/footer-pages/help/help/help.component';
import { SalesTeamComponent } from './modules/layout/footer/footer-pages/sales-team/sales-team/sales-team.component';
import { TermsOfUseComponent } from './modules/layout/footer/footer-pages/terms-of-use/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './modules/layout/footer/footer-pages/privacy-policy/privacy-policy/privacy-policy.component';
import { SafetyRulesComponent } from './modules/layout/footer/footer-pages/safety-rules/safety-rules/safety-rules.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: 'SubCategory/:id', component: VehiclesforSaleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'Vehicles', component: VehiclesComponent },
  { path: 'search/:id'
    , component: SingleProductPageComponent
    , resolve: {productData: productResolver}
  },
  { path: 'InsertItem', component: CreateStep1Component,canActivate: [AuthGuard] },
  { path: 'InsertItem/:id', component: CreateStep2Component },
  { path: 'InsertItem/:id/Details', component: CreateStep3Component },
  { path: 'login', component: LoginComponent },
  { path: 'About', component: AboutComponent },
  { path: 'AdvertisingServices', component: AdvertisingServicesComponent },
  { path: 'SiteMap', component: SiteMapComponent },
  { path: 'Help', component: HelpComponent },
  { path: 'SalesTeam', component: SalesTeamComponent },
  { path: 'TermsOfUse', component: TermsOfUseComponent },
  { path: 'PrivacyPolicy', component: PrivacyPolicyComponent },
  { path: 'SafetyRules', component: SafetyRulesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: HomePageComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

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

const routes: Routes = [
  { path: 'SubCategory/:id', component: VehiclesforSaleComponent },
  // { path: 'category1/sub2', component: FooterComponent },
  // { path: 'category2/sub1', component: FooterComponent },
  // { path: 'category2/sub2', component: FooterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'Vehicles', component: VehiclesComponent },
  { path: 'search/:id', component: SingleProductPageComponent },
  { path: 'InsertItem', component: CreateStep1Component},
  { path: 'InsertItem/:id', component: CreateStep2Component },
  { path: 'InsertItem/:id/Details', component: CreateStep3Component },
  { path: 'login', component: LoginComponent },
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

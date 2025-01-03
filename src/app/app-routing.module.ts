import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesforSaleComponent } from './modules/Categories/MainCategories/vehicles/subCategories/vehicles-for-sale/vehicles-for-sale.component';
import { VehiclesComponent } from './modules/Categories/MainCategories/vehicles/vehicles.component';
import { HomePageComponent } from './modules/Homepage/home-page/home-page.component';
import { SingleProductPageComponent } from './modules/Categories/MainCategories/shared/single-product-page/single-product-page.component';

const routes: Routes = [
  { path: 'category1/sub1', component: VehiclesforSaleComponent },
  // { path: 'category1/sub2', component: FooterComponent },
  // { path: 'category2/sub1', component: FooterComponent },
  // { path: 'category2/sub2', component: FooterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'Vehicles', component: VehiclesComponent },
  { path: 'search/:id', component: SingleProductPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: HomePageComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

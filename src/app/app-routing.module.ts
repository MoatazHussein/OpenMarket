import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CarsCategoryComponent } from './components/cars-category/cars-category.component';

const routes: Routes = [
  { path: 'category1/sub1', component: CarsCategoryComponent },
  // { path: 'category1/sub2', component: FooterComponent },
  // { path: 'category2/sub1', component: FooterComponent },
  // { path: 'category2/sub2', component: FooterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePageComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

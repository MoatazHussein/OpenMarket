import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageAllCategoriesSectionComponent } from './homepage-all-categories-section/homepage-all-categories-section.component';
import { HomepageSingleCategoryComponent } from './homepage-all-categories-section/homepage-single-category/homepage-single-category.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Item1Component } from './shared/item1/item1.component';
import { StaticSection1Component } from './static-section1/static-section1.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginComponent } from './login/login.component';
import { LandingSliderComponent } from './landing-slider/landing-slider.component';
import { VerificationDialogComponent } from './register-dialog/verification-dialog.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HomepageAllCategoriesSectionComponent,
    HomepageSingleCategoryComponent,
    Item1Component,
    StaticSection1Component,
    RegisterDialogComponent,
    LoginComponent,
    LandingSliderComponent,
    VerificationDialogComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule, 
  ],
  exports: [
    HomePageComponent,
    HomepageAllCategoriesSectionComponent,
    HomepageSingleCategoryComponent,
    Item1Component,
    StaticSection1Component,
  ],
})
export class HomepageModule { }

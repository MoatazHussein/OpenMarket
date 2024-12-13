import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './components/header/header.component';
import { HeaderDetailsComponent } from './components/header-details/header-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesHeaderComponent } from './components/categories-header/categories-header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Homepage2Component } from './Homepage/homepage2.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomepageAllCategoriesSectionComponent } from './Homepage/homepage-all-categories-section/homepage-all-categories-section.component';
import { HomepageSectionsHeaderComponent } from './Homepage/shared/homepage-sections-header/homepage-sections-header.component';
import { HomepageSingleCategoryComponent } from './Homepage/homepage-all-categories-section/homepage-single-category/homepage-single-category.component';
import { StaticSection1Component } from './Homepage/static-section1/static-section1.component';
import { CategorySummaryComponent } from './Homepage/category-summary/category-summary.component';
import { SubcategoriesLinksComponent } from './Homepage/shared/subcategories-links/subcategories-links.component';
import { SingleProductComponent } from './Homepage/shared/single-product/single-product.component';
import { CategorySummary2Component } from './Homepage/category-summary2/category-summary2.component';
import { Item1Component } from './Homepage/shared/item1/item1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDetailsComponent,
    FooterComponent,
    CategoriesHeaderComponent,
    HomePageComponent,
    Homepage2Component,
    SearchBarComponent,
    HomepageAllCategoriesSectionComponent,
    HomepageSectionsHeaderComponent,
    HomepageSingleCategoryComponent,
    StaticSection1Component,
    CategorySummaryComponent,
    SubcategoriesLinksComponent,
    SingleProductComponent,
    CategorySummary2Component,
    Item1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FontAwesomeModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from './components/header/header.component';
import { HeaderDetailsComponent } from './components/header-details/header-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesHeaderComponent } from './components/categories-header/categories-header.component';
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
import { CarsCategoryComponent } from './components/cars-category/cars-category.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SidebarSearchComponent } from './components/sidebar-search/sidebar-search.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import { CheckboxSearchComponent } from './components/checkbox-search/checkbox-search.component';
import { VehiclesComponent } from './MainCategories/vehicles/vehicles.component';
import { VehiclesFilterComponent } from './MainCategories/vehicles/vehicles-filter/vehicles-filter.component';
import { FilterInputComponent } from './MainCategories/shared/filter-input/filter-input.component';
import { TabCarouselComponent } from './MainCategories/shared/tab-content/tab-content.component';
import { SubCategoriesComponent } from './MainCategories/shared/sub-categories/sub-categories.component';
import { StoresSummaryComponent } from './MainCategories/shared/stores-summary/stores-summary.component';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';
import { SingleProductSidebarComponent } from './single-product-page/single-product-sidebar/single-product-sidebar.component';
import { SingleProductContentComponent } from './single-product-page/single-product-content/single-product-content.component';



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
    Item1Component,
    CarsCategoryComponent,
    ProductCardComponent,
    SidebarSearchComponent,
    CheckboxSearchComponent,
    VehiclesComponent,
    VehiclesFilterComponent,
    FilterInputComponent,
    TabCarouselComponent,
    SubCategoriesComponent,
    StoresSummaryComponent,
    SingleProductPageComponent,
    SingleProductSidebarComponent,
    SingleProductContentComponent
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
    MatSelectModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTabsModule,
    SwiperModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

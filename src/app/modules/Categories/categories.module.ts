import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { VehiclesFilterComponent } from './MainCategories/vehicles/vehicles-filter/vehicles-filter.component';
import { FilterInputComponent } from './MainCategories/shared/filter-input/filter-input.component';
import { TabCarouselComponent } from './MainCategories/shared/tab-content/tab-content.component';
import { SubCategoriesComponent } from './MainCategories/shared/sub-categories/sub-categories.component';
import { StoresSummaryComponent } from './MainCategories/shared/stores-summary/stores-summary.component';
import { VehiclesComponent } from './MainCategories/vehicles/vehicles.component';
import { VehiclesforSaleComponent } from './MainCategories/vehicles/subCategories/vehicles-for-sale/vehicles-for-sale.component';
import { ProductCardComponent } from './MainCategories/shared/product-card/product-card.component';
import { SidebarSearchComponent } from './MainCategories/shared/sidebar-search/sidebar-search.component';
import { CheckboxSearchComponent } from './MainCategories/shared/checkbox-search/checkbox-search.component';
import { SingleProductPageComponent } from './MainCategories/shared/single-product-page/single-product-page.component';
import { SingleProductSidebarComponent } from './MainCategories/shared/single-product-page/single-product-sidebar/single-product-sidebar.component';
import { SingleProductContentComponent } from './MainCategories/shared/single-product-page/single-product-content/single-product-content.component';
import { SearchPageComponent } from './MainCategories/search-page/search-page.component';
import { CommercialAdsComponent } from './MainCategories/commercial-ads/commercial-ads.component';

@NgModule({
  declarations: [
    VehiclesforSaleComponent,
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
    SingleProductContentComponent,
    SearchPageComponent,
    CommercialAdsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    VehiclesforSaleComponent,
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
    SingleProductContentComponent,


  ],
})
export class CategoriesModule { }

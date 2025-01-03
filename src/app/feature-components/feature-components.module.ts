import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CategorySummaryComponent } from './components/category-summary/category-summary.component';
import { CategorySummary2Component } from './components/category-summary2/category-summary2.component';
import { HomepageSectionsHeaderComponent } from './components/homepage-sections-header/homepage-sections-header.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { SubcategoriesLinksComponent } from './components/subcategories-links/subcategories-links.component';

@NgModule({
    declarations: [
        SingleProductComponent,
        CategorySummaryComponent,
        CategorySummary2Component,
        HomepageSectionsHeaderComponent,
        SubcategoriesLinksComponent,
    ],
    imports: [
        CommonModule, 
    ],
    exports: [
        SingleProductComponent,
        CategorySummaryComponent,
        CategorySummary2Component,
        HomepageSectionsHeaderComponent,
        SubcategoriesLinksComponent,

    ],
})
export class FeatureComponentsModule { }

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderDetailsComponent } from "./header-details/header-details.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../../shared/shared.module";
import { CategoriesHeaderComponent } from "./categories-header/categories-header.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { LanguageSelectorComponent } from './language-selector/language-selector.component';


@NgModule({
    declarations: [
        HeaderComponent,
        HeaderDetailsComponent,
        FooterComponent,
        CategoriesHeaderComponent,
        SearchBarComponent,
        SpinnerComponent,
        LanguageSelectorComponent
    ],
    imports: [
        CommonModule,
        RouterModule, // For navigation links in header/sidebar
        SharedModule, // Import SharedModule to access Angular Material
    ],
    exports: [
        HeaderComponent,
        HeaderDetailsComponent,
        FooterComponent,
        CategoriesHeaderComponent,
        SearchBarComponent,
        SpinnerComponent
    ],
})
export class LayoutModule { }

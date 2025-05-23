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
import { AboutComponent } from './footer/footer-pages/about/about.component';
import { AdvertisingServicesComponent } from './footer/footer-pages/advertising-services/advertising-services/advertising-services.component';
import { SiteMapComponent } from './footer/footer-pages/site-map/site-map/site-map.component';
import { HelpComponent } from './footer/footer-pages/help/help/help.component';
import { SalesTeamComponent } from './footer/footer-pages/sales-team/sales-team/sales-team.component';
import { TermsOfUseComponent } from './footer/footer-pages/terms-of-use/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './footer/footer-pages/privacy-policy/privacy-policy/privacy-policy.component';
import { SafetyRulesComponent } from './footer/footer-pages/safety-rules/safety-rules/safety-rules.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactUsComponent } from './footer/footer-pages/contact-us/contact-us.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        HeaderComponent,
        HeaderDetailsComponent,
        FooterComponent,
        CategoriesHeaderComponent,
        SearchBarComponent,
        SpinnerComponent,
        LanguageSelectorComponent,
        AboutComponent,
        AdvertisingServicesComponent,
        SiteMapComponent,
        HelpComponent,
        SalesTeamComponent,
        TermsOfUseComponent,
        PrivacyPolicyComponent,
        SafetyRulesComponent,
        ContactCardComponent,
        ContactUsComponent,
        InfoCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule, // For navigation links in header/sidebar
        SharedModule, // Import SharedModule to access Angular Material
        FormsModule
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

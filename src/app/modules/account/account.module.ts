import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { AccountDetailsComponent } from "./account-details/account-details.component";
import { AccountDashboardComponent } from "./account-dashboard.component";
import { AccountProductsComponent } from "./account-products/account-products.component";
import { AccountProductCardComponent } from "./account-product-card/account-product-card.component";
import { AccountPayComponent } from "./account-pay/account-pay.component";
import { UserProductsComponent } from "./user-products/user-products.component";

@NgModule({
  declarations: [
    AccountDashboardComponent,
    AccountDetailsComponent,
    AccountProductsComponent,
    AccountProductCardComponent,
    AccountPayComponent,
    UserProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule
  ],
  exports: [
    AccountDashboardComponent,
    AccountDetailsComponent,
    AccountProductsComponent,
    AccountProductCardComponent,
    AccountPayComponent
  ],
})

export class AccountModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { AccountDetailsComponent } from "./account-details/account-details.component";
import { AccountDashboardComponent } from "./account-dashboard.component";
import { AccountProductsComponent } from "./account-products/account-products.component";

@NgModule({
  declarations: [
    AccountDashboardComponent,
    AccountDetailsComponent,
    AccountProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule
  ],
  exports: [
    AccountDashboardComponent,
    AccountDetailsComponent,
    AccountProductsComponent
  ],
})

export class AccountModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './modules/layout/layout.module';
import { HomepageModule } from './modules/Homepage/home-page.module';
import { CategoriesModule } from './modules/Categories/categories.module';
import { CoreModule } from './core/core.module';
import { ProductCreateModule } from './modules/ProductCreate/productCreate.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/services/interceptors/auth.service';
import { AccountModule } from './modules/account/account.module';
import { LanguageInterceptor } from './core/services/interceptors/language.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    HomepageModule,
    CategoriesModule,
    ProductCreateModule,
    HttpClientModule,
    AccountModule
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

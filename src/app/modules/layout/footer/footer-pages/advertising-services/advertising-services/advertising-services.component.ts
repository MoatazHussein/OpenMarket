import { Component } from '@angular/core';
import { AddProductAccessServiceService } from '../../../../../../core/services/add-product-access-service.service';
import { Router } from '@angular/router';
import { LanguageService } from '../../../../../../core/services/language.service';

@Component({
  selector: 'app-advertising-services',
  templateUrl: './advertising-services.component.html',
  styleUrl: './advertising-services.component.css'
})
export class AdvertisingServicesComponent {

  constructor(private router: Router
    , private addProductAccessServiceService: AddProductAccessServiceService, private languageService: LanguageService,) { }


  currentLang: string = 'ar';
  isRtl: Boolean = true;
  cards :any =  [
    {
      imageUrl: 'assets/advertising-services/Classified-Ads.png',
      title:  { ar:"إعلانات مبوبة", en: "Classified Ads"},
      description:  { ar:"انشر إعلانك الأن باقل التكاليف وابدأ في جذب العملاء اليوم", en: "Post your ad now at the lowest cost and start attracting customers today."},
      buttonText:  { ar:"المزيد", en: "More"},
      buttonClick: () => this.AddProduct()

    },
    {
      imageUrl: 'assets/advertising-services/Commercials.png',
      title:  { ar:"إعلانات تجارية", en: "Commercial Ads"},
      description:  { ar:'تصميم إعلانك التجاري يرفع من قيمة علاقتك وتزيد من انتشارها', en: 'Designing your commercial increases the value of your relationship and increases its spread.'},
      buttonText:  { ar:"المزيد", en: "More"},
      buttonClick: () => this.NavigateToSales()
    },
    {
      imageUrl: 'assets/advertising-services/commercial-banners.png',
      title:  { ar:'بانارات تجارية', en: "Commercial banners"},
      description:  { ar:'تصميم بانارات رقمية ترفع من قيمة إعلانك وتزيد من انتشارها', en: "Designing digital banners that increase the value of your advertisement and its spread"},
      buttonText:  { ar:"المزيد", en: "More"},
      buttonClick: () => this.NavigateToSales()
    },
    {
      imageUrl: 'assets/advertising-services/e-marketing.png',
      title:  { ar:'التسويق الألكتروني', en: "e-marketing"},
      description:  { ar:'إدارة حسابات وإنشاء حملات متكاملة على منصات التواصل الأجتماعي', en: 'Managing accounts and creating integrated campaigns on social media platforms',},
      buttonText:  { ar:"المزيد", en: "More"},
      buttonClick: () => this.NavigateToSales()
    },
  ];

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });
    this.isRtl = this.currentLang == 'ar' ? true : false;
  }

  AddProduct() {
    debugger;
    this.addProductAccessServiceService.AddProduct();
  }


  NavigateToSales() {
    debugger;
    this.router.navigate(['/SalesTeam']);
  }

}

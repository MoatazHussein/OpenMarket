import { Component } from '@angular/core';
import { AddProductAccessServiceService } from '../../../../../../core/services/add-product-access-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertising-services',
  templateUrl: './advertising-services.component.html',
  styleUrl: './advertising-services.component.css'
})
export class AdvertisingServicesComponent {

  constructor(private router: Router
    , private addProductAccessServiceService: AddProductAccessServiceService) { }



  cards = [
    {
      imageUrl: 'assets/advertising-services/Classified-Ads.png',
      title: 'إعلانات مبوبة',
      description: 'انشر إعلانك الأن باقل التكاليف وابدأ في جذب العملاء اليوم',
      buttonText: 'المزيد',
      buttonClick: () => this.AddProduct()

    },
    {
      imageUrl: 'assets/advertising-services/Commercials.png',
      title: 'إعلانات تجارية',
      description: 'تصميم إعلانك التجاري يرفع من قيمة علاقتك وتزيد من انتشارها',
      buttonText: 'المزيد',
      buttonClick: () => this.NavigateToSales()


    },
    {
      imageUrl: 'assets/advertising-services/commercial-banners.png',
      title: 'بانارات تجارية',
      description: 'تصميم بانارات رقمية ترفع من قيمة إعلانك وتزيد من انتشارها',
      buttonText: 'المزيد',
      buttonClick: () => this.NavigateToSales()


    },
    {
      imageUrl: 'assets/advertising-services/e-marketing.png',
      title: 'التسويق الألكتروني',
      description: 'إدارة حسابات وإنشاء حملات متكاملة على منصات التواصل الأجتماعي',
      buttonText: 'المزيد',
      buttonClick: () => this.NavigateToSales()

    },
  ];

  AddProduct() {
    debugger;
    this.addProductAccessServiceService.AddProduct();
  }


  NavigateToSales() {
    debugger;
    this.router.navigate(['/SalesTeam']);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../../../../../../core/services/language.service';

@Component({
  selector: 'app-single-product-sidebar',
  templateUrl: './single-product-sidebar.component.html',
  styleUrl: './single-product-sidebar.component.css'
})
export class SingleProductSidebarComponent implements OnInit {
  
  @Input() product: any;
  lang: string = 'ar';

  constructor(private languageService: LanguageService){}

  ngOnInit(): void {
    this.lang = this.languageService.getLanguage();
  }

  mapClick(e: Event){
    e.preventDefault();
  }

  onContactClick(phoneNumber:string){
    this.contactWhatsapp(phoneNumber);
  }

  contactWhatsapp(phoneNumber:string){
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    window.open(`https://wa.me/+965${cleanNumber}`, '_blank');
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.css'
})
export class SingleProductPageComponent implements OnInit{

  public product: any = {};
  lang: string = 'ar';

  constructor(private activatedRoute: ActivatedRoute,private languageService: LanguageService){

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      ({productData}) => {
        this.product = productData;
        console.log(productData);
      });
      this.lang = this.languageService.getLanguage();
  }

}

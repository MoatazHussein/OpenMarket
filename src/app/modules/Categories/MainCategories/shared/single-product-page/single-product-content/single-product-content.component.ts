import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import SwiperCore,{ FreeMode, Navigation, Pagination, Swiper, SwiperOptions, Thumbs } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Category } from '../../../../../../models/category.model';
import { ProductService } from '../../../../../../core/services/product.service';
import { Subscription } from 'rxjs';

SwiperCore.use([FreeMode, Navigation, Thumbs]);


@Component({
  selector: 'app-single-product-content',
  templateUrl: './single-product-content.component.html',
  styleUrl: './single-product-content.component.css'
})


export class SingleProductContentComponent implements OnInit, OnChanges, OnDestroy{

  constructor(private productService: ProductService){

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getProducts();
  }
  ngOnInit(): void {
    this.getProducts();
  }  

  @Input() product: any = {};
  private sub: Subscription = new Subscription();

  thumbsSwiper: any;


  Cat: Category = {
          id: 5,
          name: 'سيارات للبيع',
          imageUrl: '',
          subCategories: [
            {id:1, name: 'تويوتا',imageUrl: ''},
            {id:1, name: 'نيسان',imageUrl: ''},
            {id:1, name: 'فورد',imageUrl: ''}
          ]
        }; 
  topProducts: any[] = [];

  getProducts(){
    this.sub.unsubscribe();
    this.sub = this.productService.getProducts(this.product.subCategoryId, 1, 5, '', '', 'desc', []).subscribe({
      next: (response) => {
        const productsArr: any[] = response.products.values;
        console.log(productsArr);
        this.topProducts = productsArr.filter(item => item.id != this.product.id);
      },

    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

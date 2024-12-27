import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import SwiperCore,{ FreeMode, Navigation, Pagination, Swiper, SwiperOptions, Thumbs } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';

SwiperCore.use([FreeMode, Navigation, Thumbs]);


@Component({
  selector: 'app-single-product-content',
  templateUrl: './single-product-content.component.html',
  styleUrl: './single-product-content.component.css'
})


export class SingleProductContentComponent {  

  images?: any[] = ['https://opensooq-images.os-cdn.com/previews/0x720/35/13/35138c466b8ca65b1d166a4e5ba586ef24e4ab22d0485a39b0aa34dde8ec47c5.jpg.webp','https://opensooq-images.os-cdn.com/previews/0x720/fd/7c/fd7c897b0e33839eb486ff69544e9f3b3d09d4aab223aabe18e3b06d75f3b085.jpg.webp','https://opensooq-images.os-cdn.com/previews/0x720/98/4e/984ee8dbef1894688fab2f30530ec4f7f092cc9bb5e9def590a91945e7f5d852.jpg.webp'];


  thumbsSwiper: any;

  items: {key: string, value: string}[] = [
    {key: 'النوع',value: 'تست'},
    {key: 'النوع',value: 'تست'},
    {key: 'النوع',value: 'تست'},
    {key: 'النوع',value: 'تست'},
    {key: 'النوع',value: 'تست'},
    {key: 'النوع',value: 'تست'},
    {key: 'النوع',value: 'تست'},
    {key: 'النوع',value: 'تست'},
    {key: 'النوع',value: 'تست'}
  ];

  Cat: Category = {
          id: 5,
          name: 'سيارات للبيع',
          imageUrl: '',
          subCategories: [
            {id:1, name: 'تويوتا',imageUrl: ''},
            {id:1, name: 'نيسان',imageUrl: ''},
            {id:1, name: 'فورد',imageUrl: ''}
          ]
        }
topProducts: Product[] = [
          {id: 8,name: 'تويوتا . كورولا . 2015',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/08/46/0846c995710d9852037b5c89fc7b9306d0bab802f876d714ec0ed55def2efa21.jpg.webp',price: 1234,useARCurrency: true},
          {id: 8,name: 'تويوتا . كورولا . 2015',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/08/46/0846c995710d9852037b5c89fc7b9306d0bab802f876d714ec0ed55def2efa21.jpg.webp',price: 1234,useARCurrency: true},
          {id: 8,name: 'تويوتا . كورولا . 2015',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/08/46/0846c995710d9852037b5c89fc7b9306d0bab802f876d714ec0ed55def2efa21.jpg.webp',price: 1234,useARCurrency: true},
          {id: 8,name: 'تويوتا . كورولا . 2015',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/08/46/0846c995710d9852037b5c89fc7b9306d0bab802f876d714ec0ed55def2efa21.jpg.webp',price: 1234,useARCurrency: true},
          {id: 8,name: 'تويوتا . كورولا . 2015',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/08/46/0846c995710d9852037b5c89fc7b9306d0bab802f876d714ec0ed55def2efa21.jpg.webp',price: 1234,useARCurrency: true}
        ]

}

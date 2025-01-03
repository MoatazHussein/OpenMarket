import { Component } from '@angular/core';
import { Category } from '../../../../models/category.model';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {

      subCategories: Category[] = [
        {id: 2, name: 'سيارات للبيع',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/android/xxxh/verticals/New/Autos/CarsForSale.png'},
        {id: 2, name: 'سيارات للبيع',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/android/xxxh/verticals/New/Autos/CarsForSale.png'},
        {id: 2, name: 'سيارات للبيع',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/android/xxxh/verticals/New/Autos/CarsForSale.png'},
        {id: 2, name: 'سيارات للبيع',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/android/xxxh/verticals/New/Autos/CarsForSale.png'},
        {id: 2, name: 'سيارات للبيع',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/android/xxxh/verticals/New/Autos/CarsForSale.png'},
        {id: 2, name: 'سيارات للبيع',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/android/xxxh/verticals/New/Autos/CarsForSale.png'},
        {id: 2, name: 'سيارات للبيع',imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/android/xxxh/verticals/New/Autos/CarsForSale.png'}
      ]

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
        {id: 8,name: 'تويوتا . كورولا . 2015',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/08/46/0846c995710d9852037b5c89fc7b9306d0bab802f876d714ec0ed55def2efa21.jpg.webp',price: 1234,useARCurrency: false},
        {id: 8,name: 'تويوتا . كورولا . 2015',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/08/46/0846c995710d9852037b5c89fc7b9306d0bab802f876d714ec0ed55def2efa21.jpg.webp',price: 1234,useARCurrency: false},
        {id: 8,name: 'تويوتا . كورولا . 2015',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/08/46/0846c995710d9852037b5c89fc7b9306d0bab802f876d714ec0ed55def2efa21.jpg.webp',price: 1234,useARCurrency: false},
        {id: 8,name: 'تويوتا . كورولا . 2015',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/08/46/0846c995710d9852037b5c89fc7b9306d0bab802f876d714ec0ed55def2efa21.jpg.webp',price: 1234,useARCurrency: false},
        {id: 8,name: 'تويوتا . كورولا . 2015',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/08/46/0846c995710d9852037b5c89fc7b9306d0bab802f876d714ec0ed55def2efa21.jpg.webp',price: 1234,useARCurrency: false}
      ]

      stores: {id: number, name: string, review: number, image1: string, image2: string}[] = [
        {id:2, name: ' ايرباج لبيع وشراء السيارات ',review: 55, image1: 'https://opensooq-images.os-cdn.com/previews/700x0/2f/cd/2fcdf7f7dabb9c74c6607485bb3482a9d3a13e82f454c8de2fe907609f60845a.jpg.webp',image2: 'https://opensooq-images.os-cdn.com/previews/75x75/fc/08/fc08e68df7173ae4fd2d347e14e4aafc3c61bce4fc43e27bc2f6f93315725ecb.jpg.webp'},
        {id:2, name: ' 2 لبيع وشراء السيارات ',review: 55, image1: 'https://opensooq-images.os-cdn.com/previews/700x0/2f/cd/2fcdf7f7dabb9c74c6607485bb3482a9d3a13e82f454c8de2fe907609f60845a.jpg.webp',image2: 'https://opensooq-images.os-cdn.com/previews/75x75/fc/08/fc08e68df7173ae4fd2d347e14e4aafc3c61bce4fc43e27bc2f6f93315725ecb.jpg.webp'},
        {id:2, name: ' ايرباج لبيع وشراء 3 ',review: 53, image1: 'https://opensooq-images.os-cdn.com/previews/700x0/2f/cd/2fcdf7f7dabb9c74c6607485bb3482a9d3a13e82f454c8de2fe907609f60845a.jpg.webp',image2: 'https://opensooq-images.os-cdn.com/previews/75x75/fc/08/fc08e68df7173ae4fd2d347e14e4aafc3c61bce4fc43e27bc2f6f93315725ecb.jpg.webp'},
        {id:2, name: ' ايرباج لبيع وشراء 4 ',review: 545, image1: 'https://opensooq-images.os-cdn.com/previews/700x0/2f/cd/2fcdf7f7dabb9c74c6607485bb3482a9d3a13e82f454c8de2fe907609f60845a.jpg.webp',image2: 'https://opensooq-images.os-cdn.com/previews/75x75/fc/08/fc08e68df7173ae4fd2d347e14e4aafc3c61bce4fc43e27bc2f6f93315725ecb.jpg.webp'}
      ]
      
}

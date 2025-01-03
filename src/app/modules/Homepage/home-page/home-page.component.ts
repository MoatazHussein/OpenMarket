import { Component } from '@angular/core';
import { Category } from '../../../models/category.model';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
item1SectionArray: any = [{
    header: 'بيع ما لا تحتاج واكسب المال',
    items: ['الوصول إلى الملايين من المشترين','أضف إعلانك وبيع أي شيء','بيع كل ما تريده بأفضل الأسعار'],
    bText: 'احصل على اعلانات اكثر',
    bLink: '',
    imgUrl: 'https://opensooqui2.os-cdn.com/prod/public/images/entryPoints/addNewListing.webp'
  },{
    header: ' 2بيع ما لا تحتاج واكسب المال',
    items: ['2الوصول إلى الملايين من المشترين','2أضف إعلانك وبيع أي شيء','بيع كل ما تريده بأفضل 2الأسعار'],
    bText: 'اضف اعلانك الان',
    bLink: '',
    imgUrl: 'https://opensooqui2.os-cdn.com/prod/public/images/entryPoints/addNewListing.webp'
  }];



    category: Category = {
      id: 5,
      name: 'عقارات للايجار',
      imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp',
      subCategories: [
        {id: 8, name: 'بيع', imageUrl: ''},
        {id: 8, name: 'شراء', imageUrl: ''}
      ]
    }

    topProducts: Product[] = [
      {id: 55, name: 'شواحن وكوابل . جديد',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/e5/b3/e5b3551c7cee030a149f4a9ccbe04e78157ed09e9dc0c1c2b1e9a1a8c2ef1884.jpg.webp',price: 55},
      {id: 55, name: 'شواحن وكوابل . جديد',imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/e5/b3/e5b3551c7cee030a149f4a9ccbe04e78157ed09e9dc0c1c2b1e9a1a8c2ef1884.jpg.webp',price: 55}
    ]
}

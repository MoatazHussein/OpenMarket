import { Component } from '@angular/core';
import { Category } from '../../../models/category.model';
import { Product } from '../../../models/product.model';
import { CategoryService } from '../../../core/services/category.service';
import { ProductService } from '../../../core/services/product.service';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  lang = 'ar';
  subCategories: any;
  categorysummary: any[] = [];

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  item1SectionArray: any = [{
    header: 'بيع ما لا تحتاج واكسب المال',
    items: ['الوصول إلى الملايين من المشترين', 'أضف إعلانك وبيع أي شيء', 'بيع كل ما تريده بأفضل الأسعار'],
    bText: 'احصل على اعلانات اكثر',
    bLink: '',
    imgUrl: 'https://opensooqui2.os-cdn.com/prod/public/images/entryPoints/addNewListing.webp'
  }, {
    header: ' 2بيع ما لا تحتاج واكسب المال',
    items: ['2الوصول إلى الملايين من المشترين', '2أضف إعلانك وبيع أي شيء', 'بيع كل ما تريده بأفضل 2الأسعار'],
    bText: 'اضف اعلانك الان',
    bLink: '',
    imgUrl: 'https://opensooqui2.os-cdn.com/prod/public/images/entryPoints/addNewListing.webp'
  }];
  category: Category = {
    id: 5,
    name: 'عقارات للايجار',
    // imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp',
    // subCategories: [
    //   {id: 8, name: 'بيع', imageUrl: ''},
    //   {id: 8, name: 'شراء', imageUrl: ''}
    // ]
  }

  topProducts: Product[] = [
    { id: 55, name: 'شواحن وكوابل . جديد', imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/e5/b3/e5b3551c7cee030a149f4a9ccbe04e78157ed09e9dc0c1c2b1e9a1a8c2ef1884.jpg.webp', price: 55 },
    { id: 55, name: 'شواحن وكوابل . جديد', imageUrl: 'https://opensooq-images.os-cdn.com/previews/300x0/e5/b3/e5b3551c7cee030a149f4a9ccbe04e78157ed09e9dc0c1c2b1e9a1a8c2ef1884.jpg.webp', price: 55 }
  ];

  products: any[] = [];

  ngOnInit() {
    this.categoryService.getSubCategories(1, 5).subscribe(
      (categories: any) => {
        categories.values.forEach((e: any) => {
          this.productService.getProducts(e.id, 1, 5, '', '', 'desc', []).subscribe({
            next: (response) => {
              const productsArr = response.products.values;
              const products = productsArr.length ? productsArr[productsArr.length - 1] : undefined;
              this.products = [];
              if (products) {
                productsArr.forEach((p: any) => {
                  var image = p.productImages[0] ? p.productImages[0] : "assets/placeholder.jpg"
                  this.products.push({ id: p.id, name: p.title, imageUrl: image, price: p.price });
                });
                this.categorysummary.push({ category: { id: e.id, name: e.nameAr, imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp' }, topProducts: this.products });
              }
            },

          });


        })
      }
    );
    // console.log("categorysummary", this.categorysummary);
  }
}

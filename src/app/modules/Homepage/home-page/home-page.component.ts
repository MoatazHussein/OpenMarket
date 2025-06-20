import { Component } from '@angular/core';
import { Category } from '../../../models/category.model';
import { Product } from '../../../models/product.model';
import { CategoryService } from '../../../core/services/category.service';
import { ProductService } from '../../../core/services/product.service';
import { LanguageService } from '../../../core/services/language.service';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  lang = 'ar';
  subCategories: any;
  categorysummary: any[] = [];
  isRtl:boolean=false;
  currentLang:string="ar";

  constructor(private categoryService: CategoryService, private productService: ProductService,private languageService :LanguageService) { }

  item1SectionArray: any = [{
    header:  { ar:"بيع ما لا تحتاج واكسب المال", en: "Sell ​​what you don't need and make money"},
    items: {
       ar:['الوصول إلى الملايين من المشترين', 'أضف إعلانك وبيع أي شيء', 'بيع كل ما تريده بأفضل الأسعار']
      ,en:['Reach millions of buyers', 'Post your ad and sell anything', 'Sell whatever you want at the best prices'] },
    bText:  { ar:"احصل على اعلانات اكثر", en: "Get more ads"},
    bLink: '',
    imgUrl: 'https://waseelatidashboard.premiumasp.net/Images/Icons/1.png'
  }, {
    header:  { ar:"احصل على إعلانات أكثر و بيع بشكل أسرع", en: "Get more ads and sell faster"},
    items: {
       ar:['احصل على خصم', 'أضف إعلانات أكثر وبيع أكثر','اكسب مال أكثر']
      ,en:['Get a discount', 'Add more ads and sell more', 'Earn more money']},
    bText:  { ar:"احصل على اعلانات اكثر", en: "Get more ads"},
    bLink: '',
    imgUrl: 'https://waseelatidashboard.premiumasp.net/Images/Icons/20.png'
  }
    ];
  category: Category = {
    id: 5,
    name: 'عقارات للايجار',
    // imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp',
    // subCategories: [
    //   {id: 8, name: 'بيع', imageUrl: ''},
    //   {id: 8, name: 'شراء', imageUrl: ''}
    // ]
  }

  topProducts: any[] = [
  ];

  products: any[] = [];

  ngOnInit() {
    this.categoryService.getSubCategories(1, 999999).subscribe(
      (categories: any) => {
        categories.values.forEach((e: any) => {
          this.productService.getProducts(e.id, 1, 5, '', 'Date', 'desc', []).subscribe({
            next: (response) => {
              const productsArr = response.products.values;
              const products = productsArr.length ? productsArr[productsArr.length - 1] : undefined;
              this.products = [];
              if (products) {
                productsArr.forEach((p: any) => {
                  var image = p.productImages[0] ? p.productImages[0] : "assets/placeholder.jpg"
                  this.products.push({ id: p.id, name: p.name, imageUrl: image, price: p.price });
                });
                this.categorysummary.push({ category: { id: e.id, name:this.currentLang == 'ar' ? e.nameAr:e.nameEn, imageUrl: 'https://opensooqui2.os-cdn.com/api/apiV/web/categories/Gaming.webp',nameEn: e.nameEn }, topProducts: this.products });
              }
            },

          });


        })
      }
    );
     this.languageService.language$.subscribe(lang => {
        this.currentLang = lang;
        this.isRtl = this.currentLang == 'ar' ? true : false;
      });
    // console.log("categorysummary", this.categorysummary);
  }
}

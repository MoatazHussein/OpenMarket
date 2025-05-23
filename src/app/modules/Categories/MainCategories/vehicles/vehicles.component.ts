import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/category.model';
import { Product } from '../../../../models/product.model';
import { CategoryService } from '../../../../core/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../core/services/product.service';
import { HomePageService } from '../../../../core/services/home-page.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent implements OnInit {
      categoryID: number = 0;
      allSubsSummary: any;

      ngOnInit(): void {
        this.catService.getSubCategories
      }
      constructor(private catService: CategoryService,private route: ActivatedRoute, private productService: ProductService, private home: HomePageService){
        this.route.paramMap.subscribe({
          next: (res) => {
            this.categoryID = Number(res.get('id'));
            this.test();
          },
          error: (err) => {
            console.log(err)
          }
        });
        
      }

      subCategories: Category[] = []

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
      topProducts: Product[] = []

      test(){
        this.home.isLoading.next(true);
        this.subCategories = [];
        this.allSubsSummary = [];
        this.catService.getSubCategoriesForSpecificCat(this.categoryID).subscribe({
          next: (res) => {
            this.subCategories = res.values.map((val: any) => {
              return {
                id: val.id,
                name: val.nameAr,
                imageUrl: val.imageURL
              };
            });
            if(this.subCategories.length > 0){
              this.productService.getCategorySummary(this.categoryID).subscribe({
                next: res => {
                  console.log(res);
                  this.allSubsSummary = res.map((item:any) => {
                    return {
                      Cat: {
                        id: item.id,
                        name: item.name,
                        imageUrl: item.imageURL
                      },
                      Products: item.products.values.map((p:any) => {
                        return {
                          id: p.id,
                          name: p.name,
                          imageUrl: p.productImages[0] ?? '',
                          price: p.price,
                          useARCurrency: false
                        }
                      })
                    }
                  });
                  this.home.isLoading.next(false);
                },
                error: err => {
                  console.log(err);
                  this.home.isLoading.next(false);
                }
              })
            }


          },
          error: (err) => {
            console.log(err);
            this.home.isLoading.next(false);
          }
        });
      }
      /*stores: {id: number, name: string, review: number, image1: string, image2: string}[] = [
        {id:2, name: ' ايرباج لبيع وشراء السيارات ',review: 55, image1: 'https://opensooq-images.os-cdn.com/previews/700x0/2f/cd/2fcdf7f7dabb9c74c6607485bb3482a9d3a13e82f454c8de2fe907609f60845a.jpg.webp',image2: 'https://opensooq-images.os-cdn.com/previews/75x75/fc/08/fc08e68df7173ae4fd2d347e14e4aafc3c61bce4fc43e27bc2f6f93315725ecb.jpg.webp'},
        {id:2, name: ' 2 لبيع وشراء السيارات ',review: 55, image1: 'https://opensooq-images.os-cdn.com/previews/700x0/2f/cd/2fcdf7f7dabb9c74c6607485bb3482a9d3a13e82f454c8de2fe907609f60845a.jpg.webp',image2: 'https://opensooq-images.os-cdn.com/previews/75x75/fc/08/fc08e68df7173ae4fd2d347e14e4aafc3c61bce4fc43e27bc2f6f93315725ecb.jpg.webp'},
        {id:2, name: ' ايرباج لبيع وشراء 3 ',review: 53, image1: 'https://opensooq-images.os-cdn.com/previews/700x0/2f/cd/2fcdf7f7dabb9c74c6607485bb3482a9d3a13e82f454c8de2fe907609f60845a.jpg.webp',image2: 'https://opensooq-images.os-cdn.com/previews/75x75/fc/08/fc08e68df7173ae4fd2d347e14e4aafc3c61bce4fc43e27bc2f6f93315725ecb.jpg.webp'},
        {id:2, name: ' ايرباج لبيع وشراء 4 ',review: 545, image1: 'https://opensooq-images.os-cdn.com/previews/700x0/2f/cd/2fcdf7f7dabb9c74c6607485bb3482a9d3a13e82f454c8de2fe907609f60845a.jpg.webp',image2: 'https://opensooq-images.os-cdn.com/previews/75x75/fc/08/fc08e68df7173ae4fd2d347e14e4aafc3c61bce4fc43e27bc2f6f93315725ecb.jpg.webp'}
      ]*/
      
}

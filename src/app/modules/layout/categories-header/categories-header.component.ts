import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../core/services/category.service';

@Component({
  selector: 'categories-header',
  templateUrl: './categories-header.component.html',
  styleUrl: './categories-header.component.css'
})
export class CategoriesHeaderComponent implements OnInit {
  lang='ar';
  // categories = [
  //   {
  //     name: 'سيارات ومركبات',
  //     subCategories: [
  //       { name: 'سيارات للبيع', route: '/category1/sub1' },
  //       { name: 'سيارات للايجار', route: '/category1/sub2' },
  //       { name: 'دراجات نارية ', route: '/category1/sub3' },
  //       { name: 'شاحنات ومقطورات ', route: '/category1/sub4' },
  //       { name: 'سيارات كلاسكية', route: '/category1/sub5' },
  //       { name: 'سيارات سكراب', route: '/category1/sub6' },
  //       { name: 'قوراب وجت سكي ', route: '/category1/sub7' },
  //       { name: 'قطع غيار + صيانة واصلاح سيارات ', route: '/category1/sub8' },
  //       { name: 'اكسسورات الركبات ', route: '/category1/sub9' },
  //       { name: 'سكراب سيارات ومركبات اخرى', route: '/category1/sub10' },
  //       { name: 'خدمات ونش مسطحات', route: '/category1/sub11' },
  //       { name: 'خدمات تنظيف السيارت', route: '/category1/sub12' },
  //       { name: 'تقييم المركبات', route: '/category1/sub13' },
  //     ]
  //   },
  //   {
  //     name: 'عقارات',
  //     subCategories: [
  //       { name: 'عقار للبيع', route: '/category2/sub1' },
  //       { name: 'عقار للايجار', route: '/category2/sub2' },
  //       { name: 'عقار للبدل', route: '/category2/sub3' },
  //       { name: 'عقار دولي', route: '/category2/sub4' },
  //       { name: 'مكاتب عقارات', route: '/category2/sub5' },
  //     ]
  //   },
  //   {
  //     name: 'الكترونيات',
  //     subCategories: [
  //       { name: 'موبايلات وتابلت', route: '/category3/sub1' },
  //       { name: 'اجهزة منزلية كهربائية', route: '/category3/sub2' },
  //       { name: 'كاميرات ومعدات تصوير', route: '/category3/sub3' },
  //       { name: 'العاب فيديو وملحقاتها', route: '/category3/sub4' },
  //       { name: 'سماعات', route: '/category3/sub5' },
  //       { name: 'اكسسورات', route: '/category3/sub6' },
  //       { name: 'ساعات ذكية', route: '/category3/sub7' },
  //       { name: 'ارقام وهواتف مميزة', route: '/category3/sub8' },
  //       { name: 'لابتوب وكمبيوتر', route: '/category3/sub9' },
  //       { name: 'خدمات الكترونية وصيانة', route: '/category3/sub10' },
  //       { name: 'اجهزة رياضية ', route: '/category3/sub11' },
  //       { name: 'اجهزة وشبكات ', route: '/category3/sub12' },
  //       { name: 'تقييمات الموبايلات والتابلت', route: '/category3/sub13' },
  //       { name: 'تقييمات الاجهزة الالكترونية', route: '/category3/sub14' },
  //     ]
  //   },
  //   {
  //     name: 'الوظائف',
  //     subCategories: [
  //       { name: 'باحث عن عمل', route: '/category4/sub1' },
  //       { name: 'جهة توظيف', route: '/category4/sub2' },
  //       { name: 'التعليم والتدريب', route: '/category4/sub2' },
  //     ]
  //   },
  // ];
  categories :any;

  constructor(private router: Router,private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  navigateTo(route: string, e : Event): void {
    debugger;
    // this.router.navigate([route]);
    switch(route){
      case 'سيارات للبيع':
      case 'Cars for sale':
        this.router.navigate(['Carsforsale']);
        break;
    }
    e.stopPropagation();
  }
  
  mainCategoryRouting(category: {name: string, subCategories: { name: string; route: string; }[]}){
    debugger;
    switch(category.name){
      case 'سيارات ومركبات':
      case 'Cars & Vehicles':
        this.router.navigate(['Vehicles']);
        break;
      case 'سيارات للبيع':
      case 'Cars for sale':
        this.router.navigate(['Carsforsale']);
        break;
    }
  }

  loadCategories(): void {
    this.categoryService.getCategories(1,10,'',this.lang).subscribe({
      next: (data) => {
        for (const key in data) {
          if (data[key].name) {
            // data[key].route = this.deleteSpaces(data[key].name); 
            data[key].route = data[key].name; 
          }
          var subCategories = data[key].subCategories;
          if (subCategories) {
            for (const subKey in subCategories) {
              if (subCategories[subKey].name) {
                // subCategories[subKey].route = this.deleteSpaces(subCategories[subKey].name); 
                subCategories[subKey].route = subCategories[subKey].name; 
              }
          }
        }
      }
        console.log(data);
        this.categories = data;
        if (this.lang =='ar'){
           this.categories = [...this.categories].reverse();
        }

      },
      error: (err) => {
        console.error('Failed to load categories:', err);
      }
    });

  }


  deleteSpaces(val:string){
    return val.replace(/\s+/g, ""); 
  }

}

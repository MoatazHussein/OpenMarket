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
  categories :any;

  constructor(private router: Router,private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  navigateTo(route: any, e : Event): void {
    debugger;
    // switch(route.name){
    //   case 'سيارات للبيع':
    //   case 'Cars for sale':
      this.router.navigate(['/SubCategory', route.id]);
    //     break;
    // }
    e.stopPropagation();
  }
  
  mainCategoryRouting(category: {name: string, subCategories: { name: string; route: string; }[]}){
    debugger;
    // switch(category.name){
      // case 'سيارات ومركبات':
      // case 'Cars & Vehicles':
      //   this.router.navigate(['Vehicles']);
      //   break;
      // case 'سيارات للبيع':
      // case 'Cars for sale':
        // this.router.navigate(['Carsforsale']);
        // break;
    // }
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

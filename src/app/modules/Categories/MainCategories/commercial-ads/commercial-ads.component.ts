import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { ProductCard } from '../../../../models/product-card.model';
import { FilterValue } from '../../../../models/filter-value.model';
import { ProductService } from '../../../../core/services/product.service';
import { AttributeService } from '../../../../core/services/attributeDetails.service';
import { FiltersService } from '../../../../core/services/filters.service';
import { LanguageService } from '../../../../core/services/language.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'commercial-ads',
  templateUrl: './commercial-ads.component.html',
  styleUrl: './commercial-ads.component.css'
  ,animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(200)
      ])
    ])
  ]
})
export class CommercialAdsComponent {
  yearlyOptions: string[] = [];
  filterConfigs: any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  products: ProductCard[] = [];
  paginatedProducts: any[] = [];
  totalProducts = 0;
  currency: string = "دينار";
  selectedFiles: File[] = [];

  subCategoryId = 1;
  currentPage = 0;
  pageSize = 5;
  search: string = '';
  sortBy: string = '';
  sortOrder: string = '';
  filterValues: FilterValue[] = [];

  currentLang: string = 'ar';
  searchQuery: string = '';

  selectedImage: string | null = null;
showModal = false;
  currentProduct: any = {};
  currentIndex = 0;
  constructor(private route: ActivatedRoute, private productService: ProductService, private attributeService: AttributeService,private filtersService: FiltersService,private languageService: LanguageService) {
  }
  content$: Observable<string> | undefined; // Observable for content that depends on language

  ngOnInit() {

    this.languageService.language$.subscribe((lang) => {
      this.currentLang = lang;
    });

    this.loadProducts();

  }


  // Handle page change event
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getCommercialAds(this.currentPage + 1, this.pageSize).subscribe({
      next: (response) => {
        // console.log("data",response);
        debugger;
        this.paginatedProducts = response.data.map((item: {
      productImages: any; id: any; title: any; name: any; description: any; price: any; adress: any; contactNumber: any; subCategoryName: any
}) => (
  {
      id: item.id,
      title: item.title,
      name: item.name,
      description: item.description,
      imagesUrl: item.productImages,
      price: item.price,
      location: item.adress,
      mobile: item.contactNumber,
      subCategoryName: item.subCategoryName,
      navigateTo: "/product-details"
    }));
        
        this.totalProducts = response.totalItemsCount;
      },
      error: (err) => {
        console.error('Failed to load Products:', err);
        this.paginatedProducts = [];
      }
    });
  }

  ReloadProductsWithNewSearch(searchData: FilterValue[]) {
    // debugger;
    console.log(`Received Search Data`, searchData);
    this.filterValues = searchData;
    this.loadProducts();
  }

  trackProductById(index: number, item: any): any {
    return item.id;
  }

 openModal(index: number) {
    this.currentIndex = index;
    this.currentProduct = this.paginatedProducts[index];
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    document.body.style.overflow = 'auto';
  }

  // Add to your CommercialAdsComponent class
prevProduct(event: Event) {
  event.stopPropagation();
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this.currentProduct = this.paginatedProducts[this.currentIndex];
  }
}

nextProduct(event: Event) {
  event.stopPropagation();
  if (this.currentIndex < this.paginatedProducts.length - 1) {
    this.currentIndex++;
    this.currentProduct = this.paginatedProducts[this.currentIndex];
  }
}
}
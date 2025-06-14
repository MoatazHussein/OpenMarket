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

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
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


  constructor(private route: ActivatedRoute, private productService: ProductService, private attributeService: AttributeService,private filtersService: FiltersService,private languageService: LanguageService) {
  }
  content$: Observable<string> | undefined; // Observable for content that depends on language

  ngOnInit() {

    this.languageService.language$.subscribe((lang) => {
      this.currentLang = lang;
      if(lang == 'en'){
        this.currency = 'KWD';
      }
    });

    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
      if (this.searchQuery) {
        this.loadProducts(this.searchQuery);
      }
    });

  }


  // Handle page change event
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadProducts(this.searchQuery);
  }

  loadProducts(search: string): void {
    this.productService.getAllProductsForSearch(this.currentPage + 1, this.pageSize, search).subscribe({
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
    this.loadProducts(this.searchQuery);
  }

  trackProductById(index: number, item: any): any {
    return item.id;
  }
}
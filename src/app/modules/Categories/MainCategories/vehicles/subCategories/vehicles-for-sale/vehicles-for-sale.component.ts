import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ProductCard } from '../../../../../../models/product-card.model';
import { ProductService } from '../../../../../../core/services/product.service';
import { FilterValue } from '../../../../../../models/filter-value.model';
import { ActivatedRoute } from '@angular/router';
import { AllGenericDTO, AttributeDetailsDTO, AttributeService } from '../../../../../../core/services/attributeDetails.service';
import { map, Observable } from 'rxjs';
import { FiltersService } from '../../../../../../core/services/filters.service';
import { LanguageService } from '../../../../../../core/services/language.service';

@Component({
  selector: 'VehiclesforSale',
  templateUrl: './vehicles-for-sale.component.html',
  styleUrl: './vehicles-for-sale.component.css'
})
export class VehiclesforSaleComponent {
  yearlyOptions: string[] = [];
  filterConfigs: any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  products: ProductCard[] = [];
  paginatedProducts: ProductCard[] = [];
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


  constructor(private route: ActivatedRoute, private productService: ProductService, private attributeService: AttributeService,private filtersService: FiltersService,private languageService: LanguageService) {
  }
  content$: Observable<string> | undefined; // Observable for content that depends on language

  ngOnInit() {
    this.getYearlyOptions();

    this.currentLang = this.languageService.getLanguage();
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
      this.loadProducts();
      this.loadAttributes();
    });


 
    this.route.paramMap.subscribe(params => {
      this.subCategoryId = Number(params.get('id'));
      this.loadProducts();
      this.loadAttributes();
      // console.log("filterConfigs", this.filterConfigs);
    });

      this.filtersService.changedFilter$.subscribe(FilterData => {
        if (FilterData != null){
          this.handleDependentFilters(FilterData.FilterParams);
          // console.log('FilterData:', FilterData.FilterParams);
        }
      });
  
      this.filtersService.filtersCriteria$.subscribe(SearchResult => {
        if ( SearchResult != null){
          this.ReloadProductsWithNewSearch(SearchResult);
          // console.log('SearchResult:', SearchResult);
        }
      });
  }


  // Handle page change event
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts(this.subCategoryId, this.currentPage + 1, this.pageSize, this.search, this.sortBy = 'Date', this.sortOrder = 'desc', this.filterValues).subscribe({
      next: (response) => {
        // console.log("data",response);
        this.paginatedProducts = this.productService.mapProduct(response.products.values);
        this.totalProducts = response.products.totalItemsCount;
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

  loadAttributes() {
  this.filterConfigs= [];
    this.attributeService.getAttributesBySubCategory(this.subCategoryId)
      .subscribe({
        next: (response: AllGenericDTO<AttributeDetailsDTO>) => {
          var subCategoryAttributes = response.values.filter(i => i.subCategoryId == this.subCategoryId);
          subCategoryAttributes.forEach(e => {
            this.filterConfigs.push({ id: e.id, label:  this.currentLang == 'ar'?e.nameAr:e.nameEn, options: '', type: e.type, nameEn: e.nameEn, parentId: e.filterId });
          });
          this.FillFilters();
        },
        error: (error) => {
          console.error('Error loading attributes', error);
        }
      });
  }
  FillFilters() {
    debugger;
    this.filterConfigs.forEach((attribute: any) => {
      this.attributeService.getDropdownOptions(attribute.id).subscribe(
        {
          next: (OptionsData) => {
            if (attribute.parentId == null) {
              if (attribute.type == 0) {
                attribute.options = OptionsData;
              }
              else if (attribute.type == 2 && attribute.nameEn == "Year") {
                attribute.options = this.yearlyOptions;
              }
            }
            else {
              attribute.disabled = true;
            }
          },
        }
      )
    }
    );
  }

  getYearlyOptions() {
    for (var i = (new Date()).getFullYear(); i >= 1990; i--) {
      this.yearlyOptions.push(i.toString());
    }
  }

  handleDependentFilters(filterParams:any){
    debugger;
    var filterData=filterParams.data;
    var filterId=filterParams.filterId;
    const Dependentfilters = this.filterConfigs.filter((item: any) => item.parentId === filterId);

    if(filterData.length==1){
      Dependentfilters.forEach((e:any)=>{
      var DropdownOptions$ = this.getDropdownOptionsForDependentAttribute(e.id, filterData[0].value);
      DropdownOptions$.subscribe({
      next: (data) => {
      const index = this.filterConfigs.findIndex((item: { id: any; }) => item.id === e.id);
      if (index !== -1) {
        this.filterConfigs[index].options = data; 
        this.filterConfigs[index].disabled = false; 
      }
    },
  })
      });

    }
    else{
      this.resetDependentFilters(filterId);
    }
  }

  resetDependentFilters(parentId: number): void {
    // Find all children of the given parent
    const children = this.filterConfigs.filter((item: any) => item.parentId === parentId);
  
    // Recursively remove each child and its descendants
    children.forEach((child: any) => {
      this.resetDependentFilters(child.id);
    });
  
    // reset the Dependent Filters from filterConfigs array
    for (let i = this.filterConfigs.length - 1; i >= 0; i--) {
      if (this.filterConfigs[i].parentId === parentId) {
        const index = this.filterConfigs.findIndex((item: any) => item.parentId === parentId);
        if (index !== -1) {
          this.filtersService.resetFilterTrigger(this.filterConfigs[i].id);
          this.filterConfigs[index].options = ''; 
          this.filterConfigs[index].disabled = true; 
        }
      }
    }
  }

  getDropdownOptionsForDependentAttribute(dependentAttributeId: number, parentSelectedValue: string): Observable<string[]> {
    return this.attributeService.getDependentDropdownOptions(dependentAttributeId)
      .pipe(
        map(response => {
          const filteredOptions = response.detailRows
            .filter(row => row.dataLimition == parentSelectedValue)
            .map(row => row.type);

          return filteredOptions;
        })
      );

  }
}
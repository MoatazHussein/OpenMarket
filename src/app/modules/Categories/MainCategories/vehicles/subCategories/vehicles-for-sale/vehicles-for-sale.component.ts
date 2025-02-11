import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ProductCard } from '../../../../../../models/product-card.model';
import { ProductService } from '../../../../../../core/services/product.service';
import { FilterValue } from '../../../../../../models/filter-value.model';

@Component({
  selector: 'VehiclesforSale',
  templateUrl: './vehicles-for-sale.component.html',
  styleUrl: './vehicles-for-sale.component.css'
})
export class VehiclesforSaleComponent {

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

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  // Handle page change event
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts(this.subCategoryId, this.currentPage + 1, this.pageSize, this.search, this.sortBy = '', this.sortOrder = '', this.filterValues).subscribe({
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

  handleSearchFromContainer(searchData: any) {
    debugger;
    console.log(`Received from`, searchData);
    this.filterValues=searchData;
    this.loadProducts();
  }



}
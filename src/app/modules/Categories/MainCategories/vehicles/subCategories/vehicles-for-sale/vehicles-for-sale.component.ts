import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ProductCard } from '../../../../../../models/product-card.model';

@Component({
  selector: 'VehiclesforSale',
  templateUrl: './vehicles-for-sale.component.html',
  styleUrl: './vehicles-for-sale.component.css'
})
export class VehiclesforSaleComponent {
  products: ProductCard[] = []; 
  paginatedProducts: ProductCard[] = []; 

  pageSize = 10; 
  currentPage = 0;
  totalProducts = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    for (let i = 1; i <= 50; i++) {
      this.products.push({
        id:i,
        title: `للبيع سوبر 8 براغي hd دبل قير شرط الفحص  (${i})`,
        description: `مستعمل , جي إم سي , سوبربان , 2008 ,  +200,000 كم , اس يو في`,
        imageUrl: `assets/car.png`,
        price: "880 دينار",
        location:"مدينة الكويت, جابر الأحمد",
        mobile:"556221XX",
        navigateTo:"/product-details"
      });
    }
    this.totalProducts = this.products.length;
  }

  ngOnInit() {
    this.updatePaginatedProducts();
  }

  // Update products displayed on the current page
  updatePaginatedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  // Handle page change event
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedProducts();
  }
}


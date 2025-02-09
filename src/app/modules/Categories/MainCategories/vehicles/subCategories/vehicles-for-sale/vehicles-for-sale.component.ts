import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ProductCard } from '../../../../../../models/product-card.model';
import { ProductService } from '../../../../../../core/services/product.service';
import { ProductDTO } from '../../../../../../models/product-DTO.model';

@Component({
  selector: 'VehiclesforSale',
  templateUrl: './vehicles-for-sale.component.html',
  styleUrl: './vehicles-for-sale.component.css'
})
export class VehiclesforSaleComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  products: ProductCard[] = [];
  paginatedProducts: ProductCard[] = [];
  currency: string = "دينار";
  selectedFiles: File[] = [];
  pageSize = 5;
  currentPage = 0;
  totalProducts = 0;
  newProduct: ProductDTO = {
    name: "string",
    description: "string",
    title: "string",
    price: 99,
    subCategoryID: 1,
    subCategoryName: "string",
    userID: "1",
    cityID: 4,
    cityName: "string",
    adress: "string",
    contactNumber: "string",
    releatedDetailsValues: [
      {
        attirebuteId: 28,
        value: "جديد"
      }
    ]
  };

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
    this.productService.getProducts(this.currentPage + 1, this.pageSize, '').subscribe({
      next: (response) => {
        // console.log("data",response);
        this.paginatedProducts = response.data;
        // console.log(response.totalPageCount);
        this.totalProducts = 16;
      },
      error: (err) => {
        console.error('Failed to load Products:', err);
        this.products = [];
      }
    });
  }

  onFilesSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.selectedFiles = Array.from(target.files);
    }
  }

  onSubmit() {
    debugger;
    this.productService.addProduct(this.newProduct, this.selectedFiles).subscribe({
      next: (response) => {
        console.log('Product added successfully:', response);
      },
      error: (error) => {
        console.error('Error adding product:', error);
      },
    });
  }

}
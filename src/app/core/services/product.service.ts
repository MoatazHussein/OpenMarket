import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProductDTO } from '../../models/product-DTO.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsApiUrl = `${environment.apiUrl}/Product`;

  constructor(private http: HttpClient) { }

  getProducts(pageNumber: number = 1, pageSize: number = 10, search: string = ''): Observable<{ data: any[]; totalPageCount: number }> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('search', search);

    return this.http.get<{ values: any[]; totalPageCount: number }>(this.productsApiUrl, { params }).pipe(
      map((response) => {
        console.log('API Response:', response); // Log the response to inspect its structure
        if (!response) {
          console.error('Invalid response format:', response);
          return { data: [], totalPageCount: 0 };
        }
        const mappedProduct = response.values.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          imageUrl: `assets/car.png`,
          price: item.price,
          location: item.adress,
          mobile: item.contactNumber,
          navigateTo: "/product-details"
        }));
        return { data: mappedProduct, totalPageCount: response.totalPageCount };
      })
    );
  }

  addProduct(product: ProductDTO, images: File[]) {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('title', product.title);
    formData.append('price', product.price.toString());
    formData.append('subCategoryID', product.subCategoryID.toString());
    formData.append('subCategoryName', product.subCategoryName);
    formData.append('userID', product.userID);
    formData.append('cityID', product.cityID.toString());
    formData.append('cityName', product.cityName);
    formData.append('adress', product.adress);
    formData.append('contactNumber', product.contactNumber);
    images.forEach((image, index) => {
      formData.append('images', image, image.name); 
    });
    product.releatedDetailsValues.forEach((attirebuteId, index) => {
      formData.append(`releatedDetailsValues[${index}].AttirebuteId`, attirebuteId.attirebuteId);
      formData.append(`releatedDetailsValues[${index}].Value`, attirebuteId.value);
    });
  
    console.log("formData",formData);
    return this.http.post(this.productsApiUrl, formData);
  }
}

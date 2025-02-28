import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProductDTO } from '../../models/product-DTO.model';
import { FilterValue } from '../../models/filter-value.model';
import { FormGroup } from '@angular/forms';

interface PreviewImage {
  url: string;
  file: File;
}
interface AttributeValue {
  AttributeId: number;
  Value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsApiUrl = `${environment.apiUrl}/Product`;
  private productSubCategoryApiUrl = `${environment.apiUrl}/SubCategory`;

  constructor(private http: HttpClient) { }

  getAllProducts(pageNumber: number = 1, pageSize: number = 10, search: string = ''): Observable<{ data: any[]; totalPageCount: number }> {
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
        const mappedProduct=this.mapProduct(response.values);
        return { data: mappedProduct, totalPageCount: response.totalPageCount };
      })
    );
  }

  getProducts(subCategoryId: number, pageNumber: number=1,pageSize:number=10,search:string='',sortBy:string='',sortOrder:string='',filterValues:FilterValue[]=[]): Observable<any> {
    var params:any={
      "pageNumber": pageNumber,
      "pageSize": pageSize,
      "search": search,
      "sortBy": sortBy,
      "sortOrder": sortOrder,
      "filterValues": filterValues
    };
    const url = `${this.productSubCategoryApiUrl}/${subCategoryId}`;
    return this.http.post(url, params);
  }

  addProduct(product: FormGroup, subCategoryId: number, previewImages: PreviewImage[]) {
    /*const formData = new FormData();
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
    return this.http.post(this.productsApiUrl, formData);*/
      const formData = new FormData();
      const attributesList: AttributeValue[] = [];
      
      const formValues = product.value;

      for ( const key of Object.keys(formValues) ) {
        if (key !== 'Images' && formValues[key] !== null && formValues[key] !== undefined) {
          if(key.includes('attribute_')){
            const attributeId = parseInt(key.split('_')[1]);
            attributesList.push({
              AttributeId: attributeId,
              Value: formValues[key]
            });
          } else {
            const value = formValues[key];
            formData.append(key, value);
          }
        }
      }


      formData.append('SubCategoryID',subCategoryId.toString());
      formData.append('Title', 'test');
      formData.append('CityID', '1');
      formData.append('Adress', 'address');
      formData.append('ContactNumber', '01024458947');
      formData.append('subCategoryName', 'string');
      formData.append('cityName', 'string');


      attributesList.forEach((attirebuteId, index) => {
        if(attirebuteId.Value == ''){
          return;
        }
        formData.append(`releatedDetailsValues[${index}].AttirebuteId`, attirebuteId.AttributeId.toString());
        formData.append(`releatedDetailsValues[${index}].Value`, attirebuteId.Value);
      });

      if (previewImages.length > 0) {
        previewImages.forEach((image, index) => {
          formData.append('Images', image.file, image.file.name);
        });
      }

      return this.http.post(this.productsApiUrl, formData);
  }

  mapProduct(product:any){
    const mappedProduct = product.map((item: {
      productImages: any; id: any; title: any; description: any; price: any; adress: any; contactNumber: any; 
}) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      imagesUrl: item.productImages,
      price: item.price,
      location: item.adress,
      mobile: item.contactNumber,
      navigateTo: "/product-details"
    }));
    
    return mappedProduct;
  }

  getProduct(productID: string){
    const url = `${this.productsApiUrl}/${productID}`;
    return this.http.get(url);
  }
}

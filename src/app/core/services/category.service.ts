import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesApiUrl = `${environment.apiUrl}/Category`;
  private subCategoriesApiUrl = `${environment.apiUrl}/SubCategory`;

  constructor(private http: HttpClient) { }

  getCategories(pageNumber: number = 1, pageSize: number = 10, search: string = '',culture:string ='ar'): Observable<any[]> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('search', search);

      const headers = new HttpHeaders({
        'Accept-Language': culture  
      });
    return this.http.get<any[]>(this.categoriesApiUrl,{ headers });
  }

  getSubCategories(pageNumber: number = 1, pageSize: number = 10, search: string = ''): Observable<any[]> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('search', search);
    return this.http.get<any[]>(this.subCategoriesApiUrl,{
      params: params
    });
  }

  getProductPricePerDay(productID: string){
    //let params = new HttpParams().set('productId', productID);

    return this.http.get<{pricePerDay: number}>(this.subCategoriesApiUrl + '/GetPricePerDay/'+productID);
  }
}

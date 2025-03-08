import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cityApiUrl = `${environment.apiUrl}/City`;

  constructor(private http: HttpClient) { }

  getAllCities(pageNumber: number = 1, pageSize: number = 10, search: string = '',culture:string ='ar'): Observable<any[]> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('search', search);

      const headers = new HttpHeaders({
        'Accept-Language': culture  
      });
    return this.http.get<any[]>(this.cityApiUrl,{ headers });
  }
}

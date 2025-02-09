import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AttributeDetailsDTO {
  id: number;
  nameEn: string;
  nameAr: string;
  type: string;
  subCategoryId: number;
  subCategoryName: string;
  filterId: number;
  filterName: string;
}

export interface AttributeDetailDTO {
    id: number;
    nameEn: string;
    nameAr: string;
    type: string;
    detailRows: {type: string, logo: string, dataLimition: string}[]
  }

export interface AllGenericDTO<T> {
  values: T[];
  totalPageCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class AttributeService {
  private apiUrl = 'https://localhost:7012/api/AttributeDetails';

  constructor(private http: HttpClient) {}

  getAttributesBySubCategory(subCategoryId: number): Observable<AllGenericDTO<AttributeDetailsDTO>> {
    return this.http.get<AllGenericDTO<AttributeDetailsDTO>>(
      `${this.apiUrl}?pageNumber=1&pageSize=100`
    );
  }

  getDropdownOptions(filterId: number): Observable<string[]> {
    //debugger;
    return this.http.get<string[]>(`${this.apiUrl}/dataLimition/${filterId}`);
  }

  getDependentDropdownOptions(
    dependentAttributeId: number
  ): Observable<AttributeDetailDTO> {
    return this.http.get<AttributeDetailDTO>(`${this.apiUrl}/${dependentAttributeId}`);
  }
}
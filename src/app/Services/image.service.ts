// services/image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export enum ImageType {
  Banner = 1,
  Slider = 2,
  Popup = 3
}

export interface Image {
  id: number;
  imageUrl: string;
  imageType: ImageType;
  createdDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = `${environment.apiUrl}/images`;

  constructor(private http: HttpClient) { }

  getImagesByType(type: ImageType): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.apiUrl}/type/${type}`);
  }
}
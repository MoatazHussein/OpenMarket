import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageSection } from '../models/page-section.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageSectionService {
  private apiUrl = environment.apiUrl +'/pagesections';

  constructor(private http: HttpClient) {}

  getSectionsByPageKey(pageKey: string): Observable<PageSection[]> {
    return this.http.get<PageSection[]>(`${this.apiUrl}/${pageKey}`);
  }
}

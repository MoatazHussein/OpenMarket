import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.apiUrl +'/contactmessages';

  constructor(private http: HttpClient) { }

  submitContactForm(formData: any): Observable<any> {
  // Transform data to match API model
  const payload = {
    fullName: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message
  };
  return this.http.post(this.apiUrl, payload);
}

  getMessages(page: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?pageNumber=${page}&pageSize=${pageSize}`);
  }

  getMessagesCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }

  markAsRead(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/markasread`, {});
  }
}
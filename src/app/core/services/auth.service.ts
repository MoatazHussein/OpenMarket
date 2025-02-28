import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`; 
  private isLoggedInStatus = false;

  constructor(private http: HttpClient) {}

  register(data: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  setLoggedIn(status: boolean) {
    this.isLoggedInStatus = status;
  }

  isLoggedIn() {
    return this.isLoggedInStatus;
  }
}

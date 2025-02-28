import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;
  private isLoggedInStatus = false;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.setLoggedIn(true);
        }
      })
    );
  }

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

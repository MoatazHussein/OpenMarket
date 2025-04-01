import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  private baseUrl = `${environment.apiUrl}/auth`;
  private isLoggedInStatus = false;
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.isLoggedInSubject.next(true);        }
      })
    );
  }
logOut(){
  localStorage.removeItem('token');
  this.setLoggedIn(false);
}
  register(data: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  setLoggedIn(status: boolean) {
    this.isLoggedInStatus = status;
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
  verifyAccount(data: { phone: string, code: string }) {
    const params = new HttpParams()
    .set('phoneNumber', data.phone)
    .set('code', data.code);
    return this.http.post<any>(`${this.baseUrl}/Activate`, null, { params });
  }
  ResendCode(phone: string) {
    const params = new HttpParams()
    .set('phoneNumber', phone);
    
    return this.http.post<any>(`${this.baseUrl}/ResendCode`, null, { params });
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}

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

  Old_login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          //localStorage.setItem('token', response.token);
          document.cookie = `token=${response.token}; max-age=${60*60*24}; path=/; SameSite=None; Secure`;
          this.isLoggedInSubject.next(true);        }
      })
    );
  }
  login(phone: string): Observable<any> {
    let params = new HttpParams()
    .set('phoneNumber', phone);

    return this.http.get(`${this.baseUrl}/IsPhoneExisted`, {params});
  }
logOut(){
  //localStorage.removeItem('token');
  document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None; Secure`;
  this.setLoggedIn(false);
}
  register(data: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  setLoggedIn(status: boolean) {
    this.isLoggedInStatus = status;
  }

  logout() {
    //localStorage.removeItem('token');
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None; Secure`;
    this.isLoggedInSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
  verifyAccount(data: { phone: string, code: string }) {
    const params = new HttpParams()
    .set('phoneNumber', data.phone)
    .set('code', data.code);
    return this.http.post<any>(`${this.baseUrl}/Activate`, null, { params }).pipe(
      tap((response) => {
        debugger;
        if(response?.isAuthenticated){
          //localStorage.setItem('token', response.token);
          document.cookie = `token=${response.token}; max-age=${60*60*24}; path=/; SameSite=None; Secure`;
          this.isLoggedInSubject.next(true);
        }
      })
    );
  }
  ResendCode(phone: string) {
    const params = new HttpParams()
    .set('phoneNumber', phone);
    
    return this.http.post<any>(`${this.baseUrl}/ResendCode`, null, { params });
  }

  private hasToken(): boolean {
    const token = this.getCookie('token');
    return !!token;
  }
  getCookie(cname: string){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}

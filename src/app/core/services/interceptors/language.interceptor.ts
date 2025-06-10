// src/app/core/interceptors/language.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from '../language.service';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(private translate: LanguageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Get current language
    const currentLang = this.translate.getLanguage();
    
    // Clone the request and add the language header
    const modifiedRequest = request.clone({
      setHeaders: {
        'Accept-Language': currentLang
      }
    });

    return next.handle(modifiedRequest);
  }
}
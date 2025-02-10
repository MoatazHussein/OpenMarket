import { Component } from '@angular/core';
import { HomePageService } from './core/services/home-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OpenMarket';
  isLoading = false;
  constructor(private homepageService: HomePageService){

  }

  ngOnInit(){
    this.homepageService.isLoading.subscribe({
      next: (v) => this.isLoading = v
    });
  }
}

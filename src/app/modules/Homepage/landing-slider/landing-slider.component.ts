import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-landing-slider',
  templateUrl: './landing-slider.component.html',
  styleUrl: './landing-slider.component.css'
})
export class LandingSliderComponent {


  slides : any = [
    // { image: 'assets/Slider/01.jpg', title: '', description: '' },
    // { image: 'assets/Slider/02.png', title: '', description: '' },
  ];

  
  ngOnInit(){
    for (let i = 1; i <=12 ; i++) {
      this.slides.push({image: `assets/Slider/${i}.jpg`,title: '', description: ''});
    }
  }

  swiperConfig = {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    speed: 1000, 
    loop: true, 
  };

}

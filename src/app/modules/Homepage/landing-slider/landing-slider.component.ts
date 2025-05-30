import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { ImageType,Image, ImageService } from '../../../Services/image.service';
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-landing-slider',
  templateUrl: './landing-slider.component.html',
  styleUrl: './landing-slider.component.css'
})
export class LandingSliderComponent {

 type: ImageType = ImageType.Banner;
  images: Image[] = [];
  isLoading = true;
  error: string | null = null;
  slides : any = [
    // { image: 'assets/Slider/01.jpg', title: '', description: '' },
    // { image: 'assets/Slider/02.png', title: '', description: '' },
  ];

    constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.isLoading = true;
    this.error = null;
    
    this.imageService.getImagesByType(this.type).subscribe({
      next: (images) => {
        this.images = images;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load images';
        this.isLoading = false;
      }
    });
  }

  getTypeName(): string {
    return ImageType[this.type];
  }

  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    speed: 1000, 
    loop: true, 
  };

}

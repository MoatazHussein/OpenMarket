import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../../../core/services/language.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(private router: Router, private languageService: LanguageService) {}

  @Input() image: string="assets/car.png";
  @Input() title: string="";
  @Input() description: string="";
  @Input() location: string="";
  @Input() mobile: string="";
  @Input() price:string="";
  @Input() currency:string="دينار";
  @Input() navigateTo:string="/home";
  @Input() id:string="";
  @Input() subCategoryName:string='';

  modifiedMobile:string='';
  lang: string = 'ar';

  ngOnInit() {
    this.modifiedMobile=this.replaceLastTwoNumbers(this.mobile);
    this.lang = this.languageService.getLanguage();
  }
  // Navigate to the desired route
  navigateToRoute() {
    this.router.navigate([this.navigateTo]);
  }

  onCallButtonClick(event: MouseEvent){
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent div
    console.log('onCallButtonClick inside div clicked!');
  }
  onChatButtonClick(event: MouseEvent){
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent div
    console.log('onChatButtonClick inside div clicked!');
  }

  onFavoriteButtonClick(event: MouseEvent){
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent div
    console.log('onFavoriteButtonClick inside div clicked!');
  }

  replaceLastTwoNumbers(input: string): string {
    return input.replace(/(\d{2})(?!.*\d)/, 'XX');
  }
}

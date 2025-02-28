import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(private router: Router) {}

  @Input() image: string="assets/car.png";
  @Input() title: string="للبيع سوبر 8 براغي hd دبل قير شرط الفحص";
  @Input() description: string="مستعمل ,‏ جي إم سي ,‏ سوبربان ,‏ 2008 ,‏ ‏ +200,000 كم ‏,‏ اس يو في";
  @Input() location: string="مدينة الكويت, جابر الأحمد";
  @Input() mobile: string="556221XX";
  @Input() price:string="880";
  @Input() currency:string="دينار";
  @Input() navigateTo:string="/home";
  @Input() id:string="";

  modifiedMobile:string='';

  ngOnInit() {
    this.modifiedMobile=this.replaceLastTwoNumbers(this.mobile);
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

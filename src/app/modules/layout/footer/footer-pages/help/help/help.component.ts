import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
 helptext="كيف استخدم وسيلتي ؟";

  qaList = [
    {
      question: 'ما هو موقع وسيلتي؟',
      answer: 'وسيلتي هي منصة كويتية ناشئة تأسست برؤية واضحة و أن نصبح الوجهة الأولى للإعلانات المبوبة والتجارية في الكويت وخارجها '
    },
  ];
}

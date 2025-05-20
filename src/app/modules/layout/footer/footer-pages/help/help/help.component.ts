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
      question: 'What is Angular?',
      answer: 'Angular is a platform for building mobile and desktop web applications.'
    },
    {
      question: 'What is a component?',
      answer: 'A component controls a patch of screen called a view.'
    },
    {
      question: 'How do I install Angular CLI?',
      answer: 'Use npm: npm install -g @angular/cli'
    }
  ];
}

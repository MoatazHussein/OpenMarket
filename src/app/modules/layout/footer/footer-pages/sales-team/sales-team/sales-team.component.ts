import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-team',
  templateUrl: './sales-team.component.html',
  styleUrl: './sales-team.component.css'
})
export class SalesTeamComponent {

  contacts = [
    {
      imageUrl: "assets/placeholder.jpg", name: 'عاصم تحسين', title: 'مندوب مبيعات',
      phoneNumber: '+965 69982458'
    },
    {
      imageUrl: "assets/placeholder.jpg", name: 'رأفت أسعد', title: 'مندوب مبيعات',
      phoneNumber: '+965 98080481'
    },
    {
      imageUrl: "assets/placeholder.jpg", name: 'محمود مكاوى', title: 'مندوب مبيعات',
      phoneNumber: '+965 50823230'
    },
    {
      imageUrl: "assets/placeholder.jpg", name: 'نائلة هشام', title: 'مندوب مبيعات',
      phoneNumber: '+965 98531865'
    },
    {
      imageUrl: "assets/placeholder.jpg", name: 'ريم محمد', title: 'مندوب مبيعات',
      phoneNumber: '+965 67040589'
    },



  ];

}

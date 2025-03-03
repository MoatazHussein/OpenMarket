import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isRtl: boolean = true; 
  title_01:string = "عن السوق المفتوح";
  title_02:string = "الدعم الفني";
  title_03:string = "أسعار و حاسبات";
  title_04:string = "أخرى";


  ElementsColumn_01:any= [{name : "ما هو موقع السوق المفتوح؟",link:"About"},{name : "الخدمات الاعلانية",link:"AdvertisingServices"},{name : "خريطة الموقع",link:"SiteMap"}/*,{name : "دول أخرى",link:"about"}*/];
  ElementsColumn_02:any= [{name : "مساعدة",link:"Help"},{name : "فريق المبيعات",link:"SalesTeam"},{name : "شروط الاستخدام",link:"TermsOfUse"},{name : "سياسة الخصوصية",link:"PrivacyPolicy"},{name:"قواعد السلامة",link:"SafetyRules"}];
  ElementsColumn_03:any= [{name : "أسعار و حاسبات",link:"about"},{name : "اسعار ومواصفات السيارات ",link:"about"},{name : "اسعار ومواصفات الموبايل",link:"about"},{name : "اسعار ومواصفات التابلت",link:"about"},{name:"أسعار ومواصفات العقارات",link:"about"},{name:"حاسبة العقارات",link:"about"},{name:"حاسبة القروض",link:"about"}];
  ElementsColumn_04:any= [{name : "بيع أي شيء",link:"about"},{name : "اكثر السيارات مبيعا في الكويت",link:"about"},{name : "كلمات وصفية",link:"about"},{name : "مراكز خدمات السيارات",link:"about"},{name:"أوقات الصلاة",link:"about"}];

}















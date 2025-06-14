import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category.service';
import { PageSection } from '../../../models/page-section.model';
import { PageSectionService } from '../../../Services/page-section.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  items: any[] = [];
pageKey: string = '6';
  sections: PageSection[] = [];
facebookLink : string ="https://www.facebook.com/waseela.kw";
instagramLink: string ="https://www.instagram.com/waseelati1";
twitterLink: string ="https://twitter.com";
linkedinLink: string ="https://linkedin.com";
currentLang: string = 'ar';


  ngOnInit(): void {
    this.categoryService.getSubCategories(1,50,'cars,property,mobiles,appliances,satellite,furniture').subscribe({
      next: (res)=>{
        console.log(res);
        debugger;
        let filterArr = ["سيارات للبيع","سيارات للايجار","عقار للبيع","عقار للايجار","موبايلات وتابلت","اجهزة منزلية كهربائية","ستلايت","نقل عفش"]
        this.items = res.values.filter((val: any) => filterArr.includes(val.nameAr));
        let elements = this.items.map((val: any) => {
          return {
            name: { ar: val.nameAr, en: val.nameEn },
            link: 'SubCategory/'+val.id
          }
        });
        elements.push({name: { ar: "مقاولات", en: "Contractors" },link: 'Category/12'});
        elements.push({name: { ar: "اثاث", en: "Furniture" } ,link: 'Category/10'});
        this.ElementsColumn_03 = elements;
      },
      error: (err)=>{

      }
    })
    if (this.pageKey) {
      this.sectionService.getSectionsByPageKey(this.pageKey).subscribe(data => {
        this.sections = data.sort((a, b) => a.sectionOrder - b.sectionOrder);
        this.facebookLink =
        this.sections.find(num => num.header.trim().toLowerCase() == "facebook" )?.subHeader.toString() ==undefined
        ?this.facebookLink:this.sections.filter(num => num.header.toLowerCase() == "facebook" )[0]?.subHeader.toString();

        this.instagramLink =
        this.sections.find(num => num.header.trim().toLowerCase() == "instagram" )?.subHeader.toString() ==undefined
        ?this.facebookLink:this.sections.filter(num => num.header.toLowerCase() == "instagram" )[0]?.subHeader.toString();

        this.twitterLink =
        this.sections.find(num => num.header.trim().toLowerCase() == "twitter" )?.subHeader.toString() ==undefined
        ?this.facebookLink:this.sections.filter(num => num.header.toLowerCase() == "twitter" )[0]?.subHeader.toString();

        this.linkedinLink =
        this.sections.find(num => num.header.trim().toLowerCase() == "linkedin" )?.subHeader.toString() ==undefined
        ?this.facebookLink:this.sections.filter(num => num.header.toLowerCase() == "linkedin" )[0]?.subHeader.toString();


      });
    }

    this.languageService.language$.subscribe(lang => {
        this.currentLang = lang;
        this.isRtl = this.currentLang == 'ar' ? true : false;
      });
  }

  constructor(private categoryService: CategoryService,private sectionService : PageSectionService,private languageService: LanguageService) {
  }
  isRtl: boolean = true; 
  title_01 :any = { ar: "عن وسيلتي", en: "About Waseelti" };
  title_02 :any = { ar: "الدعم الفني", en:  "Technical Support" };
  title_03 :any = { ar: "كتلوجات", en: "Catalogs" };


  ElementsColumn_01:any=
   [
    {name : { ar: "ما هو موقع وسيلتي؟" , en: "What is Waseelti" },link:"About"},
    {name : { ar: "الخدمات الاعلانية", en: "Advertising services" },link:"AdvertisingServices"},
     /*{name : { ar: "خريطة الموقع", en: "Website Map" } ,link:"not-found"},{name : { ar: "دول أخرى", en: "other Countries" },link:"about"}*/];
  
  ElementsColumn_02:any=[
     {name : { ar: "مساعدة", en: "Help" },link:"Help"}
    ,{name : { ar: "فريق المبيعات", en: "Sales Team" },link:"SalesTeam"}
    ,{name : { ar: "شروط الاستخدام", en: "Terms Of Use" },link:"TermsOfUse"}
    ,{name : { ar: "سياسة الخصوصية" , en: "Privacy Policy" },link:"PrivacyPolicy"}
    ,{name : { ar: "قواعد السلامة" , en: "Safety Rules" },link:"not-found"}];
  
  ElementsColumn_03:any= [
  ];


   getTextAlignment(): string {
    return this.isRtl ? 'text-lg-end' : 'text-lg-start';
  }

}















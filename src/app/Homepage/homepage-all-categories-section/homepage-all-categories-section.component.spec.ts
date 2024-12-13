import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageAllCategoriesSectionComponent } from './homepage-all-categories-section.component';

describe('HomepageAllCategoriesSectionComponent', () => {
  let component: HomepageAllCategoriesSectionComponent;
  let fixture: ComponentFixture<HomepageAllCategoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageAllCategoriesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageAllCategoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

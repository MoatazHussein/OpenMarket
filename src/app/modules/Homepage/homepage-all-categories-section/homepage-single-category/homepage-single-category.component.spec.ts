import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSingleCategoryComponent } from './homepage-single-category.component';

describe('HomepageSingleCategoryComponent', () => {
  let component: HomepageSingleCategoryComponent;
  let fixture: ComponentFixture<HomepageSingleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageSingleCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageSingleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

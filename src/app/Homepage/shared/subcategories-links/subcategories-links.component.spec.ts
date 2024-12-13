import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoriesLinksComponent } from './subcategories-links.component';

describe('SubcategoriesLinksComponent', () => {
  let component: SubcategoriesLinksComponent;
  let fixture: ComponentFixture<SubcategoriesLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubcategoriesLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubcategoriesLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

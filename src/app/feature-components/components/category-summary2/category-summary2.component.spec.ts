import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySummary2Component } from './category-summary2.component';

describe('CategorySummary2Component', () => {
  let component: CategorySummary2Component;
  let fixture: ComponentFixture<CategorySummary2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorySummary2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorySummary2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCategoryComponent } from './cars-category.component';

describe('CarsCategoryComponent', () => {
  let component: CarsCategoryComponent;
  let fixture: ComponentFixture<CarsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

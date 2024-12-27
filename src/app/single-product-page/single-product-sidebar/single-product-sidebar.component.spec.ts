import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductSidebarComponent } from './single-product-sidebar.component';

describe('SingleProductSidebarComponent', () => {
  let component: SingleProductSidebarComponent;
  let fixture: ComponentFixture<SingleProductSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleProductSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleProductSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

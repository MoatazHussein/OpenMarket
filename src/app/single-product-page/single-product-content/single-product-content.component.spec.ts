import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductContentComponent } from './single-product-content.component';

describe('SingleProductContentComponent', () => {
  let component: SingleProductContentComponent;
  let fixture: ComponentFixture<SingleProductContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleProductContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleProductContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

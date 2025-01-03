import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesforSaleComponent } from './vehicles-for-sale.component';

describe('CarsCategoryComponent', () => {
  let component: VehiclesforSaleComponent;
  let fixture: ComponentFixture<VehiclesforSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiclesforSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiclesforSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

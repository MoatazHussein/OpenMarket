import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresSummaryComponent } from './stores-summary.component';

describe('StoresSummaryComponent', () => {
  let component: StoresSummaryComponent;
  let fixture: ComponentFixture<StoresSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoresSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoresSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

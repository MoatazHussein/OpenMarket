import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSearchComponent } from './checkbox-search.component';

describe('CheckboxSearchComponent', () => {
  let component: CheckboxSearchComponent;
  let fixture: ComponentFixture<CheckboxSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

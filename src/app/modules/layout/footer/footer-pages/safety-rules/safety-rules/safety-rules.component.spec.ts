import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyRulesComponent } from './safety-rules.component';

describe('SafetyRulesComponent', () => {
  let component: SafetyRulesComponent;
  let fixture: ComponentFixture<SafetyRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyRulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SafetyRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

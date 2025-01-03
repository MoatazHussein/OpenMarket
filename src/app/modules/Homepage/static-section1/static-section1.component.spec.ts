import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSection1Component } from './static-section1.component';

describe('StaticSection1Component', () => {
  let component: StaticSection1Component;
  let fixture: ComponentFixture<StaticSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticSection1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

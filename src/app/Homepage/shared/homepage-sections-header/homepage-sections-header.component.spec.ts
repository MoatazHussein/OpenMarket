import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSectionsHeaderComponent } from './homepage-sections-header.component';

describe('HomepageSectionsHeaderComponent', () => {
  let component: HomepageSectionsHeaderComponent;
  let fixture: ComponentFixture<HomepageSectionsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageSectionsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageSectionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

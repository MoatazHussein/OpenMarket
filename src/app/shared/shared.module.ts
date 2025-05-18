import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeatureComponentsModule } from '../feature-components/feature-components.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


// Add any other shared components, directives, or pipes here

@NgModule({
  imports: [
    CommonModule, // Required for directives like *ngIf and *ngFor
    MaterialModule,
    FeatureComponentsModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    FontAwesomeModule,
    FeatureComponentsModule,
    MatProgressSpinnerModule
  ],
})
export class SharedModule {}

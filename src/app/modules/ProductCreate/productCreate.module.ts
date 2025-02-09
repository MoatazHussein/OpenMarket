import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CreateStep1Component } from './create-step1/create-step1.component';
import { CreateStep2Component } from './create-step2/create-step2.component';
import { CreateStep3Component } from './create-step3/create-step3.component';


@NgModule({
  declarations: [
    CreateStep1Component,
    CreateStep2Component,
    CreateStep3Component
  ],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule, 
  ],
  exports: [
    CreateStep1Component,
    CreateStep2Component,
    CreateStep3Component
  ],
})
export class ProductCreateModule { }

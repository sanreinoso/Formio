import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './forms-routing.module';
import { FormioModule } from '@formio/angular';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { BuilderFormComponent } from './builder-form/builder-form.component';
import { RenderFormComponent } from './render-form/render-form.component';
import { LupaButtonComponent } from './customComponents/lupa-button/lupa-button.component';
import { RatingComponent } from './customComponents/rating/rating.component';



@NgModule({
  declarations: [
    BuilderFormComponent,
    RenderFormComponent,
    LupaButtonComponent,
    RatingComponent

  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormioModule,
    SharedModule,
    HttpClientModule
  ]
})
export class FormsModule { }

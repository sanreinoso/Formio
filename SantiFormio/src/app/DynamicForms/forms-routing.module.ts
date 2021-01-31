import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderFormComponent } from './builder-form/builder-form.component';
import { RenderFormComponent } from './render-form/render-form.component';

const routes: Routes = [
    {
      path: 'builder',
      component: BuilderFormComponent
    },
    {
      path: 'render',
      component: RenderFormComponent     
    }
   
  ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FormsRoutingModule { }
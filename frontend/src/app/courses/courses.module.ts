import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    RouterModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CoursesModule { }

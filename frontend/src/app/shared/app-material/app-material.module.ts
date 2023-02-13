import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class AppMaterialModule { }

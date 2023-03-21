import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  showSpinner: boolean = false;
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'description', 'actions'];

  constructor(private coursesService: CoursesService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        console.log("")
        this.openDialog("erro ao carregar cursos")
        return of([]);
      })
    );
  }

  openDialog(errorMessage:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onEdit(){
    alert('onEdit()')
  }

  onDelete(){
    alert('onDelete()')
  }
}

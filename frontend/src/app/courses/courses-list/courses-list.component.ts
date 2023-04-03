import { Component, Input } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { Observable, catchError } from 'rxjs';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {


  showSpinner: boolean = false;

  @Input() course: Course[] = []
  readonly displayedColumns = ['name', 'description', 'actions'];


  constructor(private router: Router, private route: ActivatedRoute) {

  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onEdit() {
    alert('onEdit()')
  }

  onDelete(id: number) {
    // this.coursesService.delete(id)
    //     .subscribe(() => {
    //       console.log(`Curso ${id} deletado com sucesso!`);
    //     }, error => {
    //       console.error(error);
    //     });
  }
}

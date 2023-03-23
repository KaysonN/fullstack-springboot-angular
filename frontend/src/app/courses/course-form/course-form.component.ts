import { MatDialog } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: CoursesService) {
    this.form = this.formBuilder.group({
      name: [null],
      description: [null]
    });

    console.log('Ola' + this.form)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (data) => console.log(data),
    });
  }

  onCancel() {
    alert('cancel')
  }
}

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: new FormControl('', {nonNullable: true}),
    description: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder, private service: CoursesService, private location:  Location) {


    console.log('Ola' + this.form)
  }

  ngOnInit(): void {
    this.form.value.description;
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (data) => console.log(data),
    });
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }
}

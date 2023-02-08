import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: "1", name: "Angular", description: "Angular 2"}
  ];
  displayedColumns = ['name', 'category'];


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}

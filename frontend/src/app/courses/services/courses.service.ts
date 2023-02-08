import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[] = [
    { _id: "1", name: "Angular", description: "Angular 2" }
  ];

  constructor(private http: HttpClient) { }

  list() {
    return this.courses;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first, delay } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = "api/courses/list";

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Course[]>(this.API).pipe(
      first(),
      tap(courses => {
        console.log(courses)
      }));
  }

  save(course: Course){
    console.log(course)
    return this.http.post<Course>(this.API, course).pipe(first());
  }
}

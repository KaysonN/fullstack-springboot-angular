import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first, delay } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = "api/courses";

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Course[]>(this.API + "/list").pipe(
      first(),
      tap(courses => {
        console.log(courses)
      }));
  }

  save(course: Partial<Course>) {
    console.log(course)
    return this.http.post<Course>(this.API + "/new", course).pipe(first());
  }

  delete(id: number) {
    alert(this.API + `/delete/${id}`);
    return this.http.delete(this.API + `/delete/${id}`);
  }
}

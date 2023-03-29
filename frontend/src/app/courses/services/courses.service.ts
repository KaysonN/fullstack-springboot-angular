import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first, delay, Observable } from 'rxjs';
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

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.API}/${id}`);
  }

  create(course: Partial<Course>) {
    console.log(course)
    return this.http.post<Course>(this.API + "/new", course).pipe(first());
  }

  update(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.API}/${id}`, course);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`, { responseType: 'text' });
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course, Lesson } from './models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient){ }

  findCourseById(courseId: number): Observable<Course> {
      return this.http.get<Course>(`/api/courses/${courseId}`);
  }

  findAllCourses(): Observable<Course[]> {
      return this.http.get<Course[]>('/api/courses')
  }

  saveCourse(courseId:number, changes: Partial<Course>): Observable<Course> {
      return this.http.put<Course>(`/api/courses/${courseId}`, changes);
  }

  findLessons(
      courseId:number, filter = '', sortOrder = 'asc',
      pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

      return this.http.get<any>('/api/lessons', {
          params: new HttpParams()
              .set('courseId', courseId.toString())
              .set('filter', filter)
              .set('sortOrder', sortOrder)
              .set('pageNumber', pageNumber.toString())
              .set('pageSize', pageSize.toString())
      })
  }
}

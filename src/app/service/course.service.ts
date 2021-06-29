import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseURL="http://localhost:8080/course";
  constructor(private httpClient:HttpClient) { }

  
  getCourses():Observable<Course[]>{
  
    return this.httpClient.get<Course[]>(`${this.baseURL}`)
  }
}

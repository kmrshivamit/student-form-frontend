import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseURL:string= "http://localhost:8080/student"
  constructor(private httpClient:HttpClient) { }
  createStudent(student: Student) {
    return this.httpClient.post<any>(`${this.baseURL}`,student); 
    }

    getStudentList():Observable<Student[]>{

      return this.httpClient.get<Student[]>(`${this.baseURL}`)
      
  
    }
}

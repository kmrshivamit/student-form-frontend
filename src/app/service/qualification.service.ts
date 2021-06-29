import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Qualification } from '../model/qualification';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  private baseURL="http://localhost:8080/qualification";
  constructor(private httpClient:HttpClient) { }

  
  getQualifications():Observable<Qualification[]>{
  
    return this.httpClient.get<Qualification[]>(`${this.baseURL}`)
  }
}
``
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hobby } from '../model/hobby';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  private baseURL="http://localhost:8080/hobby";
  constructor(private httpClient:HttpClient) { }

  
  getHobbies():Observable<Hobby[]>{
  
    return this.httpClient.get<Hobby[]>(`${this.baseURL}`)
  }
}

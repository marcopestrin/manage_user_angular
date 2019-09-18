import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<Object>{

    var data = this.http.get("http://localhost:5000/api/v1/todos"); 
    return data;
  }

}

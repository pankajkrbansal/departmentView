import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {

  constructor(private http:HttpClient) { }

  getAlldepartments():Observable<any>{
      return this.http.get('http://localhost:1050/departments')
  }
  getAllemployees():Observable<any>{
    return this.http.get('http://localhost:1050/employees')
  }
  registerUser(data):Observable<any>{
    return this.http.post('http://localhost:1050/register',data)
  }
}

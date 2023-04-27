import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  addTask(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/tasks', data);
  }

  getTaskList(): Observable<any> {
    return this._http.get('http://localhost:3000/tasks');
  }
}

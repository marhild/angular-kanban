import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectListSubject = new Subject<any>();

  constructor(private _http: HttpClient) { }

  addProject(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/projects', data);
  }

  getProjectList(): Observable<any> {
    return this._http.get('http://localhost:3000/projects');
  }

  deleteProject(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/projects/${id}`)
  }

  updateProject(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/projects/${id}`, data);
  }

  getProjectById(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/projects/${id}`);
  }

  sendAddEditProjectEvent(){
    this.projectListSubject.next(this.projectListSubject);
  }

  getAddEditProjectEvent():Observable<any>{
     return this.projectListSubject.asObservable();
  }
}

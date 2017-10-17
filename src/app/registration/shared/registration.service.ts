import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any>{
    const name = user.name;
    const age = user.age;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`/api/users/${name}/${age}`, { headers })
    .catch(error => Observable.throw(error));
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderService {

    constructor(private http: HttpClient) { }

    logout(): Observable<any> {
        localStorage.clear();
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(`/api/authentication/logout`, { headers })
                        .catch(error => Observable.throw(error));
    }
    
}
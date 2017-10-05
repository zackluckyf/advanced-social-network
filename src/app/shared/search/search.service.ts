import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) { }

    query(userQuery: string): Observable<any> {
        return this.http.get(`/api/users/search/${userQuery}`)
                        .catch(error => Observable.throw(error));
    }
    
}
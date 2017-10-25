import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { SELECT_USER, IAppState } from '../../../store';

@Injectable()
export class DashboardService {

    constructor(private http: HttpClient, private ngRedux: NgRedux<IAppState>) { }

    getAllUserPosts(id: number): Observable<any>{
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(`/api/users/${id}/allposts`, { headers })
                        .catch(error => Observable.throw(error));
    }

}
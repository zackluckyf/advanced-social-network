import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { SELECT_USER, IAppState } from '../../../store';

@Injectable()
export class ProfileService {

    constructor(private http: HttpClient, private ngRedux: NgRedux<IAppState>) { }

    getFirstUser(): void {
        this.ngRedux.dispatch({
            type: SELECT_USER,
            selectedUser: 1
        });
    }

    getUserInformation(user: number): Observable<any>{
        return this.http.get(`/api/users/${user}`)
                        .catch(error => Observable.throw(error));
    }

    deleteUser(name: string): Observable<any>{
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

        return this.http.delete(`/api/users/${name}`, { headers })
        .catch(error => Observable.throw(error));
    }

    createUser(user: any): Observable<any>{
        const name = user.name;
        const age = user.age;
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

        return this.http.post(`/api/users/${name}/${age}`, { headers })
        .catch(error => Observable.throw(error));
    }

    changeUserAge(user: any): Observable<any>{
        const name = user.name;
        const age = user.age;
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

        return this.http.put(`/api/users/${name}/${age}`, { headers })
        .catch(error => Observable.throw(error));
    }

}
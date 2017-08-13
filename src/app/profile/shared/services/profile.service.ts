import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { SELECT_USER,
         IAppState } from '../../../store';

@Injectable()
export class ProfileService {

    constructor(private http: Http, private ngRedux: NgRedux<IAppState>) { }

    getFirstUser(): void {
        this.ngRedux.dispatch({
            type: SELECT_USER,
            selectedUser: 1
        });
    }

    getUserInformation(user: number): Observable<any>{
        return this.http.get(`/api/user/${user}`)
                        .map(res => res.json())
                        .catch(error => Observable.throw(error));
    }

    deleteUser(name: string): Observable<any>{
        let headers= new Headers();

        return this.http.delete(`/api/user/${name}`, new RequestOptions({
            headers: headers
        }))
        .catch(error => Observable.throw(error));
    }

    createUser(user: any): Observable<any>{
        let name = user.name;
        let age = user.age;
        let headers= new Headers();

        return this.http.post(`/api/user/${name}/${age}`, new RequestOptions({
            headers: headers
        }))
        .catch(error => Observable.throw(error));
    }

    changeUserAge(user: any): Observable<any>{
        let name = user.name;
        let age = user.age;
        let headers= new Headers();

        return this.http.put(`/api/user/${name}/${age}`, new RequestOptions({
            headers: headers
        }))
        .catch(error => Observable.throw(error));
    }

}
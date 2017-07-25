import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { SELECT_USER,
         IAppState } from '../store';

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
                        .map(res => res.json());
    }

}
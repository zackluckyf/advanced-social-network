import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { SELECT_USER,
         IAppState } from '../store';

@Injectable()
export class MerchandiseService {

  constructor(private http: Http, private ngRedux: NgRedux<IAppState>) { }

  // Get all posts from the API
  getAllMerchandise(): Observable<any[]> {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }

}

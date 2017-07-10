import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class MerchandiseService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllMerchandise(): Observable<any[]> {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }
}

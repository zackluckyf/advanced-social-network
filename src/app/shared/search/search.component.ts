import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SearchService } from './search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ SearchService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  searchText: string;
  queryResults: Observable<any[]>;
  highlighted: number = 0;

  constructor(private router: Router, private _searchService: SearchService) { }

  ngOnInit() { }

  navWithParams(location: string, ...params){
    this.router.navigate([location, ...params]);
  }

  searchTextChange(){
    if(this.searchText.length > 2){
      this.queryResults = this._searchService.query(this.searchText);
    }
  }

  setIndex(index: number){
    this.highlighted = index;
  }

}

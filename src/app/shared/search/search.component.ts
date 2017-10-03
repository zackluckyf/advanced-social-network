import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  searchText: string;
  queryResults: any;
  highlighted: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {  }

  nav(location: string){
    this.router.navigate([location]);
  }

  searchTextChange(){
    if(this.searchText.length > 2){
      this.queryResults = [
        { displayName: 'Zack Smith', name: 'zack-smith' },
        { displayName: 'Rachael Smith', name: 'rachael-smith' },
        { displayName: 'Joe Cowboy', name: 'joe-cowboy' }
      ]
    }
  }

  setIndex(index: number){
    this.highlighted = index;
  }

}

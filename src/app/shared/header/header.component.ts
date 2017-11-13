import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderService } from './header.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  userId: number;

  constructor(private router: Router, private _headerService: HeaderService) { }

  ngOnInit() { 
    this._headerService.$userId.subscribe(data => this.userId = data);
  }

  nav(location: string){
    this.router.navigate([location]);
  }

  logout(){
    this._headerService.logout().subscribe(data => this.nav('/login'));
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

import { Posts } from '../shared/models/posts';
import { DashboardService } from '../shared/services/dashboard.service';

@Component({
  selector: 'dashboard-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  posts$: Observable<Posts[]>;

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit() {
    this.posts$ = this._dashboardService.getAllUserPosts(1).share();
  }

}

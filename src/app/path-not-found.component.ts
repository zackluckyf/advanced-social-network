import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-path-not-found',
  templateUrl: './path-not-found.component.html',
  styleUrls: ['./path-not-found.component.scss']
})
export class PathNotFoundComponent implements OnInit {

  status: number = 404;
  statusText: string = 'The page you are looking for does not exist';
  url: string = this.platformLocation.pathname;

  constructor(private router: Router, private route: ActivatedRoute, private platformLocation: PlatformLocation) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        console.log(params);
        let paramStatus = params.get('status');
        let paramStatusText = decodeURIComponent(params.get('statusText') === null ? '': params.get('statusText'));
        let paramUrl = params.get('url');
        this.status = Number(paramStatus) || this.status;
        this.statusText = paramStatusText || this.statusText;
        this.url = paramUrl || this.url;
    })
  }

}

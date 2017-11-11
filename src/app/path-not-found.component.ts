import { Component, OnInit, } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-path-not-found',
  templateUrl: './path-not-found.component.html',
  styleUrls: ['./path-not-found.component.scss']
})

export class PathNotFoundComponent implements OnInit {

  status: number = 404;
  statusText: string = 'The page you are looking for does not exist';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
         let paramStatus = params.get('status');
         let paramStatusText = decodeURIComponent(params.get('statusText') === null ? '': params.get('statusText'));
         this.status = Number(paramStatus) || this.status;
         this.statusText = paramStatusText || this.statusText;
     })
  }

}

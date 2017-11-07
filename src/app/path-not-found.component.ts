import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-path-not-found',
  templateUrl: './path-not-found.component.html',
  styleUrls: ['./path-not-found.component.scss']
})

export class PathNotFoundComponent implements OnInit {

  status: number = 404;
  statusText: string = 'The page you are looking for does not exist';
  url: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.url = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
    });
  }

}

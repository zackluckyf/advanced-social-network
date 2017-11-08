import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
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

  constructor(private router: Router, 
              @Inject(PLATFORM_ID) private platformId: Object,
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (isPlatformBrowser(this.platformId)) {
        this.url = this.document.location.href;
      } else {
        // server side still
      }
    });
  }

}

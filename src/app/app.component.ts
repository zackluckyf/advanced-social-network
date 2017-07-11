import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ecommerce-app';

  constructor(private router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

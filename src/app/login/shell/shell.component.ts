import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  email: string;
  password: string;

  constructor(private _loginService: LoginService, private cdr: ChangeDetectorRef, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  authenticate(){
    this._loginService.authenticate(this.email, this.password).subscribe(data => {
      this.email = '';
      this.password = '';
      this.cdr.detectChanges();
    }, err => {
      this.email = '';
      this.password = '';
      this.cdr.detectChanges();
    });
  }

  nav(location: string){
    this.router.navigate([location], {relativeTo: this.route});
  }


}

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../shared/login.service';
import { HeaderService } from '../../shared/header/header.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private _loginService: LoginService, 
              private cdr: ChangeDetectorRef, 
              private router: Router, 
              private route: ActivatedRoute,
              private _headerService: HeaderService) { }

  ngOnInit() {

  }

  authenticate(){
    this._loginService.authenticate(this.email, this.password).subscribe(data => {
      this._headerService.setUserId(data.id);
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

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent implements OnInit {

  email: string;

  constructor(private cdr: ChangeDetectorRef, private _loginService: LoginService) { }

  ngOnInit() {
  }

  authenticate(){
    this._loginService.reset(this.email).subscribe(data => {
      this.email = '';
      this.cdr.detectChanges();
      // call toast service notifying of successful email
    }, err => { 
      this.email = '';
      this.cdr.detectChanges();
      // call toast service notifying of unsuccessful email 
    });
  }

}

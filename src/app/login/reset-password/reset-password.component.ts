import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent implements OnInit {

  password: string;
  passwordResetToken: string

  constructor(private router: Router, private route: ActivatedRoute, private cdr: ChangeDetectorRef, private _loginService: LoginService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.passwordResetToken = params['reset-token'];
    });
  }

  changePassword(){
    this._loginService.changePassword(this.password, this.passwordResetToken).subscribe(data => {
      this.password = '';
      this.cdr.detectChanges();
      this.nav('/login');
      // call toast service notifying of successful pw change
    }, err => { 
      this.password = '';
      this.cdr.detectChanges();
      // call toast service notifying of unsuccessful pw change 
    });
  }
  
  nav(location: string){
    this.router.navigate([location], {relativeTo: this.route});
  }

}

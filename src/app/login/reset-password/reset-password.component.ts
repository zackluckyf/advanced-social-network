import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { ToasterService } from 'angular2-toaster';

import { Toast } from '../../shared/models/toast.model';

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

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private cdr: ChangeDetectorRef, 
              private _loginService: LoginService, 
              private toasterService: ToasterService) { }

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
      this.popToast({ status: 'success', title: 'Password Changed', body: data.message });
    }, err => { 
      this.password = '';
      this.cdr.detectChanges();
      this.nav('/login/forgot-password');
      if(err.error){
        err.message = err.error.message
      }
      this.popToast({ status: 'warning', title: 'Password Change Failed', body: err.message });
    });
  }
  
  nav(location: string){
    this.router.navigate([location], {relativeTo: this.route});
  }

  popToast(toast: Toast) {
    this.toasterService.pop(toast.status, toast.title, toast.body);
  }

}

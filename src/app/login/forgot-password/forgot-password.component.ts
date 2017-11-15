import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { ToasterService } from 'angular2-toaster';

import { Toast } from '../../shared/models/toast.model';

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent implements OnInit {

  email: string;

  constructor(private cdr: ChangeDetectorRef, private toasterService: ToasterService, private _loginService: LoginService) { }

  ngOnInit() {
  }

  reset(){
    this._loginService.reset(this.email).subscribe(data => {
      this.popToast({ status: 'success', title: 'Email Sent', body: data.message });
    }, err => { 
      this.popToast({ status: 'warning', title: 'Email Failed', body: err.error.message });
    });
  }

  popToast(toast: Toast) {
    this.toasterService.pop(toast.status, toast.title, toast.body);
  }

}

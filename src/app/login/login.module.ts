import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './shared/login.service';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent, 
    ForgotPasswordComponent, 
    ResetPasswordComponent
  ],
  providers: [ LoginService ]
})
export class LoginModule { }

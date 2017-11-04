import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './shared/login.service';

import { ShellComponent } from './shell/shell.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [ShellComponent, ForgotPasswordComponent],
  providers: [ LoginService ]
})
export class LoginModule { }

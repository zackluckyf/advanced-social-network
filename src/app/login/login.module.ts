import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './shared/login.service';

import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [ShellComponent],
  providers: [ LoginService ]
})
export class LoginModule { }

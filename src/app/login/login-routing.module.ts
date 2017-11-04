import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', component: ShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

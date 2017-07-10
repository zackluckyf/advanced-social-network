import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingShellComponent } from './landing-shell/landing-shell.component';

const routes: Routes = [
  { path: '**', component: LandingShellComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

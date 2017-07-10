import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchandiseShellComponent } from './merchandise-shell/merchandise-shell.component';

const routes: Routes = [
  { path: '**', component: MerchandiseShellComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchandiseRoutingModule { }

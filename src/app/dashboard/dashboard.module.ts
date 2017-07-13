import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule} from './dashboard-routing.module';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [ShellComponent]
})
export class DashboardModule { }

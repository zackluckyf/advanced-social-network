import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DashboardService } from './shared/services/dashboard.service';

import { DashboardRoutingModule} from './dashboard-routing.module';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [ShellComponent],
  providers: [DashboardService]
})
export class DashboardModule { }

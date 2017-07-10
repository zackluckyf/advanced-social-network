import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule} from './landing-routing.module';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [ShellComponent]
})
export class LandingModule { }

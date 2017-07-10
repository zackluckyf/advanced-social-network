import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule} from './landing-routing.module';
import { LandingShellComponent } from './landing-shell/landing-shell.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [LandingShellComponent]
})
export class LandingModule { }

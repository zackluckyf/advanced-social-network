import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';

import { ShellComponent } from './shell/shell.component';
import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [
    ShellComponent
  ],
  providers: [ ProfileService ]
})
export class ProfileModule { }

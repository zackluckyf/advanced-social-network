import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { RegistrationRoutingModule } from './registration-routing.module';
import { ShellComponent } from './shell/shell.component';
import { RegistrationService } from './shared/registration.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegistrationRoutingModule
  ],
  declarations: [ShellComponent],
  providers: [RegistrationService]
})
export class RegistrationModule { }

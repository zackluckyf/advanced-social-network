import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AccountDeletionRoutingModule } from './account-deletion-routing.module';
import { ShellComponent } from './shell/shell.component';
import { AccountDeletionService } from './shared/account-deletion.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountDeletionRoutingModule
  ],
  declarations: [ShellComponent],
  providers: [AccountDeletionService]
})
export class AccountDeletionModule { }

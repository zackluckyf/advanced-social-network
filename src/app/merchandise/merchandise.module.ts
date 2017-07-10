import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchandiseRoutingModule } from './merchandise-routing.module';
import { MerchandiseShellComponent } from './merchandise-shell/merchandise-shell.component';

@NgModule({
  imports: [
    CommonModule,
    MerchandiseRoutingModule
  ],
  declarations: [MerchandiseShellComponent]
})
export class MerchandiseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MerchandiseRoutingModule } from './merchandise-routing.module';
import { MerchandiseService } from './merchandise.service';
import { ShellComponent } from './shell/shell.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MerchandiseRoutingModule
  ],
  declarations: [ShellComponent, ProductComponent],
  providers: [ MerchandiseService ]
})
export class MerchandiseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

import { HeaderService } from './header/header.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent
  ],
  providers: [ HeaderService ]
})
export class SharedModule { }

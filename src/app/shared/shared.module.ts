import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderService } from './header/header.service';
import { WebsocketService } from './chat/websocket.service';
import { ChatService } from './chat/chat.service';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    SearchComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    FooterComponent
  ],
  providers: [ HeaderService, WebsocketService, ChatService ]
})
export class SharedModule { }

import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { WebsocketService } from './websocket.service';

import { Message } from '../models/message.model';

@Injectable()
export class ChatService {

  MESSAGING_URL;    
  messages: Subject<any>;

  constructor(private websocketService: WebsocketService) { 
    this.MESSAGING_URL = `${window.location.protocol === 'https' ? 'wss': 'ws'}://${window.location.host}/api/messaging`;
    this.messages = <Subject<Message>>this.websocketService
    .connect(this.MESSAGING_URL)
    .map((response: any): Message => {
      return response;
    }).share();
  }

}

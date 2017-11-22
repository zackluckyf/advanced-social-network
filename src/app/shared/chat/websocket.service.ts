import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';

@Injectable()
export class WebsocketService {

    constructor() { }

    private subject: WebSocketSubject<MessageEvent>;

    public connect(url): WebSocketSubject<MessageEvent> {
        if (!this.subject) {
          this.subject = this.create(url);
        } 
        return this.subject;
      }
    
    private create(url): WebSocketSubject<any> {
        let subject = Observable.webSocket(url);
        return subject;
    }
}
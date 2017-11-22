import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import * as moment from 'moment';

import { ChatService } from '../../shared/chat/chat.service';

import { Conversation, Message } from '../shared/models/conversations.model'

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  private _conversations: Subject<Conversation[]> = new Subject();
  conversations$: Observable<Conversation[]> = this._conversations.asObservable();

  selectedConversationalPartner: Conversation; 

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.messages.subscribe(data => {
      if (data.conversations) {
        this._conversations.next(data.conversations);
      }			
    }, err => console.log(err),
    () => console.log('complete'));
    this.sendMsg();
  }

  selectedConversation(partner: Conversation) {
    this.selectedConversationalPartner = partner;
  }

  formatDate(date: Date){
    let sameYear = moment().isSame(date, 'year');
    let sameDay = moment().isSame(date, 'day') && moment().isSame(date, 'year');
    let formattedDate;
    if(sameDay){
      formattedDate = moment(date).format('h:mm a');
    } else if(!sameYear){
      formattedDate = moment(date).format('MM/D/YY');
    } else {
      formattedDate = moment(date).format('MMM D');
    }
    return formattedDate;
  }

  message = {
		author: 'tutorialedge',
    message: 'this is a test message',
    date: new Date()
	}

  sendMsg() {
		this.chatService.messages.next(JSON.stringify(this.message));
		this.message.message = '';
	}

}

import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import * as moment from 'moment';

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

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this._conversations.next(
        [
          {
            conversationalPartner: 'Zack',
            messages: [
              {
                date: new Date(2016, 8, 30),
                message: 'Hi',
                name: 'Zack'
              },
              {
                date: new Date(2017, 6, 21),
                message: 'Hey Cutie',
                name: 'Rachael'
              }
            ]
          },
          {
            conversationalPartner: 'Rachael',
            messages: [
              {
                date: new Date(2017, 7, 21),
                message: 'I love you',
                name: 'Rachael'
              },
              {
                date: new Date(2017, 7, 23, 21, 40),
                message: 'You are the best',
                name: 'Rachael'
              }
            ]
          }
        ]
      )
    }, 1000);
    
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

}

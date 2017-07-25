import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';
import { Observable} from 'rxjs/Observable';

import { ProfileService } from '../profile.service'

@Component({
    selector: 'profile-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShellComponent implements OnInit {

    @select('selectedUser') selectedUser$: Observable<any>;

    selectedUser: number;
    userInformation: Observable<any>;

    constructor(private _profileService: ProfileService) { }

    ngOnInit() { 
        this.userInformation = this._profileService.getUserInformation(1);
    }
    
}



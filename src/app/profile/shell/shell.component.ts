import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

import { ProfileService } from '../shared/services/profile.service'

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
    name: string;
    createName: string;
    createAge: number;


    constructor(private router: Router, private _profileService: ProfileService) { }

    ngOnInit() {
        this.userInformation = this._profileService.getUserInformation(1).share();
    }

    deleteUser(){
        this._profileService.deleteUser(this.name).subscribe(
            data => console.log('delete user data', data),
            err => {
                // console.error('delete user error', err)
                this.router.navigate([`/error-page`, err.status, err.statusText, err.url])
            }
        );
        this.name = '';
    }

    newUser(){
        let user = {
            name: this.createName,
            age: this.createAge
        }
        this._profileService.createUser(user).subscribe(
            data => {
                console.log('create user data', data);
                this.createName = null;
                this.createAge = null;
            },
            err => console.error('create user error', err)
        );
        

    }
    
}



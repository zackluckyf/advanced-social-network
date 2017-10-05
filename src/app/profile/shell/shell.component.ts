import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    modifyName: string;
    modifyAge: number;


    constructor(private router: Router, private _profileService: ProfileService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userInformation = this._profileService.getUserInformation(params['id']).share();
            // needed to manually detect changes due to on push change detection strategy
            this.cdr.detectChanges();
        });
    }

    deleteUser(){
        this._profileService.deleteUser(this.name).subscribe(
            data => console.log('delete user data', data),
            err => {
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

    changeUserAge(){
        let user = {
            name: this.modifyName,
            age: this.modifyAge
        }
        this._profileService.changeUserAge(user).subscribe(
            data => {
                console.log('changed user age', data);
                this.modifyName = null;
                this.modifyAge = null;
            },
            err => console.error('changed user age error', err)
        );
    }
    
}



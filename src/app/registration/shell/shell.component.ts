import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


import { RegistrationService } from '../shared/registration.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  createName: string;
  createAge: number;

  constructor(private _registrationService: RegistrationService) { }

  ngOnInit() {
  }

  newUser(){
    let user = {
        name: this.createName,
        age: this.createAge
    }
    this._registrationService.createUser(user).subscribe(
        data => {
            console.log('create user data', data);
            this.createName = null;
            this.createAge = null;
        },
        err => console.error('create user error', err)
    );
  }

}

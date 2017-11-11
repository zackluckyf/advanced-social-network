import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { RegistrationService } from '../shared/registration.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  firstName: string;
  lastName: string;
  birthday: Date;
  username: string;
  email: string;
  password: string;

  constructor(private router: Router, private route: ActivatedRoute,private _registrationService: RegistrationService) { }

  ngOnInit() {
  }

  newUser(){
    let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        birthday: this.birthday, 
        username: this.username,
        email: this.email,
        password: this.password
    }
    this._registrationService.createUser(user).subscribe(
        data => {
            this.firstName = null;
            this.lastName = null;
            this.birthday = null;
            this.username = null;
            this.email = null;
            this.password = null;
            // setup toast here?
            this.nav('/login')
        },
        // setup toadt here
        err => console.error('create user error', err)
    );
  }

  nav(location: string){
    this.router.navigate([location], {relativeTo: this.route});
  }

}

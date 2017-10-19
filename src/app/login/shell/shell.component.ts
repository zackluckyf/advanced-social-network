import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  username: string;
  password: string;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {

  }

  authenticate(){
    this._loginService.authenticate(this.username, this.password);
  }


}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';


import { AccountDeletionService } from '../shared/account-deletion.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  name: string;

  constructor(private router: Router, private _accountDeletionService: AccountDeletionService) { }

  ngOnInit() { }

  deleteUser(){
    this._accountDeletionService.deleteUser(this.name).subscribe(
        data => console.log('delete user data', data),
        err => {
            this.router.navigate([`/error-page`, err.status, err.statusText, err.url])
        }
    );
    this.name = '';
  }


}

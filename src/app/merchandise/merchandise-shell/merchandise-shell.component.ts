import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-merchandise-shell',
  templateUrl: './merchandise-shell.component.html',
  styleUrls: ['./merchandise-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MerchandiseShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

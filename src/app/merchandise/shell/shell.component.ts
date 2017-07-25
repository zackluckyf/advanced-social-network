import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable} from 'rxjs/Observable';
import { MerchandiseService } from '../merchandise.service';

@Component({
  selector: 'merchandise-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit {

  merchandise: Observable<any[]>;


  constructor(private merchandiseService: MerchandiseService) { }

  ngOnInit() {
    this.merchandise = this.merchandiseService.getAllMerchandise();

  }

}

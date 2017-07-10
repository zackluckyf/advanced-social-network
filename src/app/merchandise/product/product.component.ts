import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'merchandise-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() product: any;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log('new product: ', this.product);
  }

}

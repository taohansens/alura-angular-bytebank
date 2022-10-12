import { Component, Input, OnInit } from '@angular/core';
import { TransferClass } from '../model/TransferClass';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  @Input() transfers: TransferClass[];

  constructor() { }

  ngOnInit(): void {
  }

}

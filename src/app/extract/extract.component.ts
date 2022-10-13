import { Component, Input, OnInit } from '@angular/core';
import { TransferClass } from '../model/TransferClass';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  @Input() transfers: TransferClass[];

  constructor(private service: TransferService) { }

  ngOnInit() {
    this.transfers = this.service.transfers;
  }
}

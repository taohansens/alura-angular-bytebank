import { Component } from '@angular/core';
import { TransferClass } from './model/TransferClass';
import { TransferService } from './services/transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferService){}

  doTransfer($event){
    this.service.add($event)
  }
}

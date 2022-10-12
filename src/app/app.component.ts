import { Component } from '@angular/core';
import { TransferClass } from './model/TransferClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transfers: TransferClass[] = [];
  transfer($event){
    const transfer = {...$event, data: new Date}
    this.transfers.push(transfer);
    console.log(this.transfers)
  }
}

import { Component } from '@angular/core';
import { TransferClass } from './model/TransferClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferValues: TransferClass;

  transfer($event){
    console.log($event)
    this.transferValues = $event;
  }
}

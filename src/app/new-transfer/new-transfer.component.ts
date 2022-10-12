import { Component, EventEmitter, Output } from "@angular/core";
import { TransferClass } from "../model/TransferClass";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./new-transfer.component.scss']
})

export class NewTransferComponent{
  @Output() onClickTransfer = new EventEmitter<TransferClass>()

  amount: number;
  destination: number;

  transfer(){
    console.log("Solicitada nova transferência")
    const valorEmitir = { amount: this.amount, destination: this.destination}
    this.onClickTransfer.emit(valorEmitir)
    this.clean()
  }


    clean(){
    this.amount = 0;
    this.destination = 0;
  }
}

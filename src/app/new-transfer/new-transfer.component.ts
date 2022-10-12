import { Component } from "@angular/core";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./new-transfer.component.scss']
})

export class NewTransferComponent{
  amount: number;
  destination: number;

  transfer(){
    console.log("Solicitada nova transferência")
    console.log("Valor", this.amount)
    console.log("Valor", this.destination)
  }
}

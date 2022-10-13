import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { TransferClass } from "../model/TransferClass";
import { TransferService } from "../services/transfer.service";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./new-transfer.component.scss']
})

export class NewTransferComponent{
  @Output() onClickTransfer = new EventEmitter<TransferClass>()

  amount: number;
  destination: number;

  constructor(private service: TransferService, private router: Router){
  }

  transfer(){
    const valorEmitir = { amount: this.amount, destination: this.destination}
    this.service.add(valorEmitir).subscribe(result => {
      console.log(result);
      this.clean();
      this.router.navigateByUrl('extract')
    },
    (error) => console.error(error))
  }


    clean(){
    this.amount = 0;
    this.destination = 0;
  }
}

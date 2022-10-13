import { Injectable } from '@angular/core';
import { TransferClass } from '../model/TransferClass';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private listTransfers: TransferClass[];
  constructor() {
    this.listTransfers = [];
  }

  get transfers(){
    return this.listTransfers;
  }

  add(transfer: TransferClass){
    this.complementWithDate(transfer)
    this.transfers.push(transfer)
  }

  private complementWithDate(transfer: TransferClass){
    transfer.data = new Date();
  }
}

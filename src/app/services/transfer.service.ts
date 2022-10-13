import { TransferClass } from './../model/TransferClass';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private listTransfers: TransferClass[];
  private url = "http://localhost:3000/transfers";

  constructor(private httpClient: HttpClient) {
    this.listTransfers = [];
  }

  get transfers(){
    return this.listTransfers;
  }

  allTransfers(): Observable<TransferClass[]> {
    return this.httpClient.get<TransferClass[]>(this.url);
  }

  add(transfer: TransferClass){
    this.complementWithDate(transfer)
    this.transfers.push(transfer)
  }

  private complementWithDate(transfer: TransferClass){
    transfer.data = new Date();
  }
}

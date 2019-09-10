import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ClientDataIE } from '../interface/clientdata.model';



export class ClientDataService {
  private clientdatalist: ClientDataIE[] = [];
  private clientdataupdater = new Subject<ClientDataIE[]>();

  constructor(private http: HttpClient) {}

  getClientDataList() {
    this.http.get<{message: string, clientdata: ClientDataIE[]}>('http://localhost:3000/list')
      .subscribe((incomingdata) => {
        this.clientdatalist = incomingdata.clientdata;
        this.clientdataupdater.next([...this.clientdatalist]);
      });
  }

  getClientDataListListener() {
    return this.clientdataupdater.asObservable();
  }

  addClientData(title: string, content: string) {
    const clientdata: ClientDataIE = { id: null, name: title, dni: content, phone: null, address: null };
    this.clientdatalist.push(clientdata);
    this.clientdataupdater.next([...this.clientdatalist]);
  }
}

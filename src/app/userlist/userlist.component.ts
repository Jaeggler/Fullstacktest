import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../services/clientdata.service';
import { ClientDataIE } from '../interface/clientdata.model';

@Component({
  selector: 'app-userlist',
  templateUrl: 'userlist.component.html'
})

export class UserListComponent implements OnInit{

  constructor(public clientdataService: ClientDataService){}

  ClientDataList: ClientDataIE[] = [];

  ngOnInit() {
    this.ClientDataList = this.clientdataService.getClientDataList();
  }
}

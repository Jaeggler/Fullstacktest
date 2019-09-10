import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientDataService } from '../services/clientdata.service';
import { ClientDataIE } from '../interface/clientdata.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html'
})

export class UserListComponent implements OnInit, OnDestroy {
  clientdatalist: ClientDataIE[] = [];
  private userlistsubs: Subscription;

  constructor(public clientdataservice: ClientDataService) {}

  ngOnInit() {
    this.clientdataservice.getClientDataList();
    this.userlistsubs = this.clientdataservice.getClientDataListListener()
      .subscribe((incomingdata: ClientDataIE[]) => {
        this.clientdatalist = incomingdata;
      });
  }

  ngOnDestroy() {
    this.userlistsubs.unsubscribe();
  }
}

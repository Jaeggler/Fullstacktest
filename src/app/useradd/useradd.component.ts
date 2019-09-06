import { Component } from '@angular/core';
import { ClientDataService } from '../services/clientdata.service';
import { NgForm } from '@angular/forms';
import { ClientDataIE } from '../interface/clientdata.model';

@Component({
  selector: 'app-useradd',
  templateUrl: 'useradd.component.html'
})

export class UserAddComponent {

  constructor(public clientdataService: ClientDataService){}

  onAddClient(form: NgForm) {
    if (form.invalid){
      return;
    }

    this.clientdataService.addClientData(form.value.name, form.value.dni, form.value.phone, form.value.address);
  }

}

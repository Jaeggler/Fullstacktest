import { Component } from '@angular/core';
import { ClientDataService } from '../services/clientdata.service';
import { NgForm } from '@angular/forms';
import { ClientDataIE } from '../interface/clientdata.model';

@Component({
  selector: 'app-useradd',
  templateUrl: 'useradd.component.html'
})

export class UserAddComponent {

  // Aqui se importa el servicio
  constructor(public clientdataService: ClientDataService){}

  onAddClient(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.clientdataService.addClientData(form.value.name_input, form.value.dni_input, form.value.phone_input, form.value.address_input);
    form.resetForm();
  }

}

import { ClientDataIE } from '../interface/clientdata.model';

export class ClientDataService {
  private clientdatalist: ClientDataIE [] = [];

  getClientDataList() {
    return [...this.clientdatalist];
  }

  addClientData(name: string, dni: string, phone: string, address: string) {
    const clientdata: ClientDataIE = {name: name, dni: dni, phone: phone, address: address};
    this.clientdatalist.push(clientdata);

  }
}

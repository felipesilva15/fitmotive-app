import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../api/address';

@Pipe({
  name: 'formatedAddress',
  standalone: true
})
export class FormattedAddressPipe implements PipeTransform {

  transform(address: Address): string {
    let formattedAddress = '';

    formattedAddress = `${address.street}, ${address.number}`;

    if (address.complement) {
      formattedAddress = `${formattedAddress} - ${address.complement}`;
    }

    formattedAddress = `${formattedAddress} - ${address.city}, ${address.region_code} - CEP ${address.postal_code}`;

    return formattedAddress;
  }

}

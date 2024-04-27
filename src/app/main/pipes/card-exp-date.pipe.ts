import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardExpDate',
  standalone: true
})
export class CardExpDatePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) {
      return '';
    }

    return `${value.substring(0, 2)}/${value.substring(2, 6)}`
  }

}

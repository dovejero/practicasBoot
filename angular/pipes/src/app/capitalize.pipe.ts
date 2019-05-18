import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    value = value.split(' ');
    console.log(value);
    let array = [];
    for (let val of value) {
      let stringTmp = '';
      stringTmp = val[0].toUpperCase();
      stringTmp += val.slice(1);
      val = stringTmp;
      array.push(val);
    }

    return array.join(' ');
  }

}

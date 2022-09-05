import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  //value bizim pipe in değiştirilmek istenen değer
  transform(value: number, rate: number): number {
    return value + (value * rate / 100);
  }

}

//pipe --> elimizdeki veriyi daha farklı bir şekilde göstermek için kullanılır.uppercase , lowecase gibi.
//pipelara parametre olarak veri göndermek için ":" kullanılır.


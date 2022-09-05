import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText?.toLocaleLowerCase() || '';
    return filterText ? value.filter((product: Product) => product.productName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}

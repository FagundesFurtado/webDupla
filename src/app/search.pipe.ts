import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
  name: 'buscar'
})
export class BuscarPipe {
  transform(value: any[], q: string) {
    if (!q || q === '') {
      return value;
    }
    return value.filter(
      item => -1 < item.nome.toLowerCase().indexOf(q.toLowerCase())
    );
  }
}

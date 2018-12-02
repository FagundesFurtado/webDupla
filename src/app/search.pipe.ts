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
      item => {
        const atr = Object.keys(item);
        for (let i = 0; i < atr.length; i++) {
          const variavel = JSON.stringify(item[atr[i]]);
          if (variavel.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            i = atr.length;
            return true;
          }
        }
        return false;
      }
    );
  }
}

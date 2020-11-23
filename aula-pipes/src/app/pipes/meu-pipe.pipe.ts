import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPipe'
})
export class MeuPipePipe implements PipeTransform {

  transform(numero: number, multiplicador: number): number {

    if (numero && multiplicador) {
      return numero*multiplicador;
    }

    return 0;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

import { Aluno } from './../model/aluno.model';

@Pipe({
  name: 'alunosMatriculados'
})
export class AlunosMatriculadosPipe implements PipeTransform {

  transform(alunos: Aluno[]): Aluno[] {
    /* 
    let alunosAux: Aluno[] = [];
    
    for(const item of alunos) {
      if (item.matriculado) {
        alunosAux.push(item);
      }
    }

    return alunosAux;
 */

    alunos = alunos.filter( function (item) {
      if (item.matriculado)
        return item;
    });

    return alunos;
  }

}

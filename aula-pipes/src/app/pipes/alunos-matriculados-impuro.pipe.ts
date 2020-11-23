import { Pipe, PipeTransform } from '@angular/core';
import { Aluno } from '../model/aluno.model';

@Pipe({
  name: 'alunosMatriculadosImpuro',
  pure: false
})
export class AlunosMatriculadosImpuroPipe implements PipeTransform {

  transform(alunos: Aluno[]): Aluno[] {
    alunos = alunos.filter( function (item) {
      if (item.matriculado)
        return item;
    });

    return alunos;
  }

}

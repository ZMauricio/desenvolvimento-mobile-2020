import { Component, OnInit } from '@angular/core';

import { Aluno } from './../../model/aluno.model';

@Component({
  selector: 'app-pipe-impuro',
  templateUrl: './pipe-impuro.page.html',
  styleUrls: ['./pipe-impuro.page.scss'],
})
export class PipeImpuroPage implements OnInit {
  public nome: string = '';

  public alunos: Aluno [] = [
    {
      nome: 'Chaves',
      matriculado: true
    },
    {
      nome: 'Godinez',
      matriculado: false
    },
    {
      nome: 'Chiquinha',
      matriculado: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  adicionar() {
    let auxAlunos: Aluno[] = [];

    this.alunos.push({
      nome: this.nome,
      matriculado: true
    });

    auxAlunos = auxAlunos.concat(this.alunos);
    this.alunos = [];
    this.alunos = this.alunos.concat(auxAlunos);

    console.log('Alunos', this.alunos);
  }

  adicionarImpuro() {
    this.alunos.push({
      nome: this.nome,
      matriculado: true
    });

    console.log('Alunos', this.alunos);
  }
}

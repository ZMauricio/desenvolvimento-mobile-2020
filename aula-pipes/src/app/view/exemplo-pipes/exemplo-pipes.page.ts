import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.page.html',
  styleUrls: ['./exemplo-pipes.page.scss'],
})
export class ExemploPipesPage implements OnInit {

  public hoje: number = Date.now();

  public dolar: number = 5.60;
  public real: number = 1.48;

  public textao: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum porro aperiam voluptas animi eligendi rem, dignissimos voluptatem ipsum assumenda modi et dolore accusantium temporibus! Iusto non repudiandae ullam quam.';
  public textinho: string = 'Aula de Desenvolvimento Mobile';

  public valorUm: number = 789.1467109;
  public valorDois: number = 1.46;

  public numero: number = 10;

  constructor() { }

  ngOnInit() {
  }

}

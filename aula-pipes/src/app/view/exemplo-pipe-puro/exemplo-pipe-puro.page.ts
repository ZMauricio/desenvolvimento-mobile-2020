import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipe-puro',
  templateUrl: './exemplo-pipe-puro.page.html',
  styleUrls: ['./exemplo-pipe-puro.page.scss'],
})
export class ExemploPipePuroPage implements OnInit {

  public valor: number;
  public expoente: number;

  constructor() { }

  ngOnInit() {
  }

}

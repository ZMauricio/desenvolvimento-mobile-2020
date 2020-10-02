import { Component, OnInit } from '@angular/core';


import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.page.html',
  styleUrls: ['./clientes-lista.page.scss'],
})
export class ClientesListaPage implements OnInit {


  private clientes: Array<Cliente> = [ ];

  constructor(private clientesService: ClientesService) {
    this.clientes = this.clientesService.getAll();
  }

  ngOnInit() {
  }

}

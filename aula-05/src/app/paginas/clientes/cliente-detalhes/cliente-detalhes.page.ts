import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.page.html',
  styleUrls: ['./cliente-detalhes.page.scss'],
})
export class ClienteDetalhesPage implements OnInit {

  public cliente: Cliente = null;

  /*
  public cliente: Cliente = {
    id: -1,
    nome: '',
    email: '',
    telefone: '',
    descricao: '',
    foto: ''
  };
  */

  private id = null;

  constructor(private routeActive: ActivatedRoute,
              private router: Router,
              private clienteService: ClientesService) {

    this.id = this.routeActive.snapshot.paramMap.get('id');
    this.id = Number(this.id);
    

    this.cliente = this.clienteService.getClienteById(this.id);

    console.log('Cliente', this.cliente);
  }

  ngOnInit() {
  }

  deletar() {
    this.clienteService.deletar(this.cliente.id);
    this.router.navigateByUrl('/clientes-lista');
  }

}

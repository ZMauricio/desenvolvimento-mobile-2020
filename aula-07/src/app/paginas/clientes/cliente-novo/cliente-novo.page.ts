import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.page.html',
  styleUrls: ['./cliente-novo.page.scss'],
})
export class ClienteNovoPage implements OnInit {

  public cliente: Cliente = {
    id: null,
    nome: '',
    email: '',
    telefone: '',
    descricao: '',
    foto: ''
  };

  constructor(private router: Router,
              private clientesService: ClientesService) {

  }

  ngOnInit() {
  }

  cadastrar() {
    this.cliente.foto = 'assets/imgs/clientes/cliente-01.jpg';

    this.clientesService.cadastrar(this.cliente).then((data)=>{

      console.log('cliente cadastrado', data);

      this.router.navigateByUrl('/clientes-lista');

    }).catch((erro)=>{
      console.error(erro);
    });
    
   
  }
}

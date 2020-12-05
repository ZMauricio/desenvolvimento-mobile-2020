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

    this.clientesService.getAll().subscribe((clientes)=>{
      this.clientes = [];

     for(const obj of clientes) {
      let clienteAux: Cliente;

      clienteAux = {
        id: obj.payload.doc.id,
        nome: obj.payload.doc.data()['nome'],
        email: obj.payload.doc.data()['email'],
        telefone: obj.payload.doc.data()['telefone'],
        descricao: obj.payload.doc.data()['descricao'],
        foto: obj.payload.doc.data()['foto'],
        uriFotoParaExibir: obj.payload.doc.data()['uriFotoParaExibir'],
        nomeFotoEnviada: obj.payload.doc.data()['nomeFotoEnviada']
      };

      
      this.clientes.push(clienteAux);      
     }

    });

  }

  ngOnInit() {
  }

}

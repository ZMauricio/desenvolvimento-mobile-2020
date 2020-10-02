import { Injectable } from '@angular/core';

import { Cliente } from 'src/app/models/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Array<Cliente> = [
    {
      id: 1,
      nome: 'Goku',
      email: 'goku@dbz.jp',
      telefone: '1234567',
      descricao: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aspernatur, dignissimos minus illo quasi doloremque laudantium dolor eos temporibus iusto tempore! Molestias nulla eaque veritatis atque error ipsa, pariatur distinctio!',
      foto: '../../../../assets/imgs/clientes/cliente-01.jpg'
    },
    {
      id: 2,
      nome: 'Vegeta',
      email: 'vegega@dbz.jp',
      telefone: '1234456',
      descricao: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aspernatur, dignissimos minus illo quasi doloremque laudantium dolor eos temporibus iusto tempore! Molestias nulla eaque veritatis atque error ipsa, pariatur distinctio!',
      foto: '../../../../assets/imgs/clientes/cliente-02.jpg'
    },
    {
      id: 3,
      nome: 'Vegeta',
      email: 'vegega@dbz.jp',
      telefone: '1234456',
      descricao: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aspernatur, dignissimos minus illo quasi doloremque laudantium dolor eos temporibus iusto tempore! Molestias nulla eaque veritatis atque error ipsa, pariatur distinctio!',
      foto: '../../../../assets/imgs/clientes/cliente-03.jpg'
    },
    {
      id: 4,
      nome: 'Bulma',
      email: 'vegega@dbz.jp',
      telefone: '1234456',
      descricao: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aspernatur, dignissimos minus illo quasi doloremque laudantium dolor eos temporibus iusto tempore! Molestias nulla eaque veritatis atque error ipsa, pariatur distinctio!',
      foto: '../../../../assets/imgs/clientes/cliente-04.jpg'
    },
    {
      id: 5,
      nome: 'Gohan',
      email: 'vegega@dbz.jp',
      telefone: '1234456',
      descricao: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, aspernatur, dignissimos minus illo quasi doloremque laudantium dolor eos temporibus iusto tempore! Molestias nulla eaque veritatis atque error ipsa, pariatur distinctio!',
      foto: '../../../../assets/imgs/clientes/cliente-05.jpg'
    }
  ];

  constructor() { }


  getAll():Array<Cliente> {
    return this.clientes;
  }

  getClienteById(id: number) {
    for(const obj of this.clientes) {
      if (id === obj.id) {
        return obj;
      }
    }

    return null;
  }

  deletar(id: number) {
    for(let i=0; i<this.clientes.length; i++) {
      if (this.clientes[i].id === id) {
        this.clientes.splice(i, 1);
        break;
      }
    }
  }
}

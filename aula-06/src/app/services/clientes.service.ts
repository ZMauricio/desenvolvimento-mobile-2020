import { Injectable } from '@angular/core';

import { AngularFirestore,	AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';

import { Cliente } from 'src/app/models/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // private clientes: Array<Cliente> = [ ];

  constructor(private firestore: AngularFirestore) {

  }

  atualizar(cliente: Cliente) {
    console.log('Atualizar cliente', cliente);
    
    return this.firestore.doc(`clientes/${cliente.id}`).update(cliente);
  }

  cadastrar(cliente: Cliente) {
    delete cliente.id;
    return this.firestore.collection('clientes').add(cliente);
  }

  getAll() {
    return this.firestore.collection('clientes').snapshotChanges();
  }



  getClienteById(id: string) {
    return this.firestore.collection('clientes').doc(id).ref.get().then((cliente)=>{

      if(cliente.exists) {
        const dadosCliente = cliente.data();
        console.log('Firestore dadosCliente', dadosCliente);

        
        return {
          id: cliente.id,
          nome: dadosCliente.nome,
          email: dadosCliente.email,
          telefone: dadosCliente.telefone,
          descricao: dadosCliente.descricao,
          foto: dadosCliente.foto
        };
       
      }

      return {};
    });
  }

  deletar(id: string) {
    return this.firestore.doc(`clientes/${id}`).delete();
  }
}




/*
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

  cadastrar(cliente: Cliente) {
    cliente.id = this.clientes.length+1;
    cliente.foto = '../../../../assets/imgs/clientes/cliente-01.jpg';

    this.clientes.push(cliente);
  }

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
*/

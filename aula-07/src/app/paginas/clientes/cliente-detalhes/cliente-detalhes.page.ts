import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.page.html',
  styleUrls: ['./cliente-detalhes.page.scss'],
})
export class ClienteDetalhesPage implements OnInit {

  public cliente: Cliente = null;
  public clienteAux: Cliente = {
    id: '',
    nome: '',
    email: '',
    telefone: '',
    descricao: '',
    foto: ''
  };

  public form: boolean = false;

  public modoEdicao: boolean = false;

  private id = null;

  constructor(private alerta: AlertController,
              private routeActive: ActivatedRoute,
              private router: Router,
              private clienteService: ClientesService) {

    this.id = this.routeActive.snapshot.paramMap.get('id');
    // this.id = Number(this.id);

   /*
      this.cliente =  {
        id: '',
        nome: '',
        email: '',
        telefone: '',
        descricao: '',
        foto: ''
      };
*/


    this.clienteService.getClienteById(this.id).then((cliente)=>{


      
      this.cliente =  {
        id: cliente.id,
        nome: cliente.nome,
        email: cliente.email,
        telefone: cliente.telefone,
        descricao: cliente.descricao,
        foto: cliente.foto
      };
      

      // this.cliente =  cliente;
      

      this.form = true;

      console.log('Cliente', this.cliente);
    });
    
  }

  ngOnInit() {
  }

  iniciarEdicao() {
    this.modoEdicao = true;
    // this.copy(this.clienteAux, this.cliente);

    // this.clienteAux.id = this.cliente.id;
    this.clienteAux.nome = this.cliente.nome;
    this.clienteAux.email = this.cliente.email;
    this.clienteAux.telefone = this.cliente.telefone;
    this.clienteAux.descricao = this.cliente.descricao;
    this.clienteAux.foto = this.cliente.foto;
  }

  deletar() {
    this.clienteService.deletar(this.cliente.id).then(()=>{
      this.router.navigateByUrl('/clientes-lista');
    });
  }



  editar() {
    this.clienteService.atualizar(this.cliente).then(()=>{
      this.router.navigateByUrl('/clientes-lista');
    }).catch((error)=>{
      console.error(error);
    });
  }




  async deleteAlertConfirm() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Você realmente deseja deletar este cliente?',
      message: '',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            // console.log('Confirm Okay');
            this.deletar();
          }
        }
      ]
    });

    await alert.present();
  }

  cancelarEdicao() {
    console.log('cliente', this.cliente);
    console.log('clienteAux', this.clienteAux);

    // this.copy(this.cliente, this.cliente);
    this.cliente.id = this.clienteAux.id;
    this.cliente.nome = this.clienteAux.nome;
    this.cliente.email = this.clienteAux.email;
    this.cliente.telefone = this.clienteAux.telefone;
    this.cliente.descricao = this.clienteAux.descricao;
    this.cliente.foto = this.clienteAux.foto;

    this.modoEdicao = false;
  }

  copy(objA: Cliente, objB: Cliente) {
    objA.id = objB.id;
    objA.nome = objB.nome;
    objA.email = objB.email;
    objA.telefone = objB.telefone;
    objA.descricao = objB.descricao;
    objA.foto = objB.foto;
  }
}

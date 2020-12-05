import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActionSheetController, Platform } from '@ionic/angular';

import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';


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
    foto: '',
    uriFotoParaExibir: '',
    nomeFotoEnviada: ''
  };

  public form: boolean = false;

  public modoEdicao: boolean = false;

  private id = null;

  public imagemExibicao: string;
  private fotoAlterada: boolean = false;


  
  public imagemSelecionada = '';
  public uriAquivoImagem = '';

  constructor(private alerta: AlertController,
              private routeActive: ActivatedRoute,
              private router: Router,
              private clienteService: ClientesService,
              private webview: WebView,
              private actionSheet: ActionSheetController,
              private camera: Camera,
              private filePath: FilePath,
              private platform: Platform) {

    this.id = this.routeActive.snapshot.paramMap.get('id');


    this.clienteService.getClienteById(this.id).then((cliente)=>{


      
      this.cliente =  {
        id: cliente.id,
        nome: cliente.nome,
        email: cliente.email,
        telefone: cliente.telefone,
        descricao: cliente.descricao,
        foto: cliente.foto,
        uriFotoParaExibir: cliente.uriFotoParaExibir,
        nomeFotoEnviada: cliente.nomeFotoEnviada
      };
      
      this.imagemExibicao = cliente.uriFotoParaExibir;

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

    this.clienteService.deletarImagem(this.cliente.nomeFotoEnviada).then(()=>{

      this.clienteService.deletar(this.cliente.id).then(()=>{
        this.router.navigateByUrl('/clientes-lista');
      });

    });

  }



  editar() {

    if (this.fotoAlterada && this.imagemExibicao) {
      this.cliente.foto = this.imagemExibicao;
      
      this.clienteService.atualizar(this.cliente, this.fotoAlterada).then(()=>{
        this.router.navigateByUrl('/clientes-lista');
      }).catch((error)=>{
        console.error(error);
      });

    } else {
        this.clienteService.atualizar(this.cliente, false).then(()=>{
          this.router.navigateByUrl('/clientes-lista');
        }).catch((error)=>{
          console.error(error);
        });
    }

    
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



  
  async exibirActionSheet() {

    const actionSheet = await this.actionSheet.create({
      header: 'Escolha uma das opções de captura de imagem',
      cssClass: 'my-custom-class',
      buttons: [
        {
        text: 'Câmera',
        // role: 'destructive',
        icon: 'camera',
        handler: () => {
          console.log('Câmera escolhida');
          this.obterFoto(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Arquivo de imagem',
        icon: 'file-tray-full',
        handler: () => {
          console.log('Sistema de arquivos escolhido');
          this.obterFoto(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel'
      }
    ]
    });
    await actionSheet.present();
  }



  
 obterFoto(sourceType: PictureSourceType)  {
  let caminhoCorrigido, nomeUtilizado;


   const options: CameraOptions = {
    quality: 10,
    targetHeight: 200,
    targetWidth: 200,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
   };


   this.camera.getPicture(options).then((caminho)=>{

    if ( this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY)  {

      this.filePath.resolveNativePath(caminho).then((caminhoArquivo) => {

        caminhoCorrigido = caminhoArquivo.substr(0, caminhoArquivo.lastIndexOf('/')+1);
        nomeUtilizado = caminho.substr( caminho.lastIndexOf('/')+1,  caminho.lastIndexOf('?'));

        // this.copiarDiretorioLocal(caminhoCorrigido, nomeUtilizado, this.criarNomeImagem());
        this.uriAquivoImagem = caminhoCorrigido + nomeUtilizado;
        this.imagemSelecionada = this.caminhoParaImage(this.uriAquivoImagem);


        this.imagemExibicao = this.imagemSelecionada;
        this.fotoAlterada = true;
      });



    } else {
      caminhoCorrigido = caminho.substr(0, caminho.lastIndexOf('/')+1);
      // nomeUtilizado = caminho.substr(  caminho.lastIndexOf('/')+1,  caminho.lastIndexOf('?')  );
      nomeUtilizado = caminho.substr(  caminho.lastIndexOf('/')+1 );


  
      // this.copiarDiretorioLocal(caminhoCorrigido, nomeUtilizado, this.criarNomeImagem());

      this.uriAquivoImagem = caminhoCorrigido + nomeUtilizado;
      this.imagemSelecionada = this.caminhoParaImage(this.uriAquivoImagem);
      this.imagemExibicao = this.imagemSelecionada;
      this.fotoAlterada = true;
    }

   

   });
 }


 
 caminhoParaImage(caminhoImagem) {
  if (caminhoImagem == null) {
    return '';
  } else {
     const caminhoConvertido = this.webview.convertFileSrc(caminhoImagem);
     return caminhoConvertido;
  }
 }


 criarNomeImagem() {
   const d = new Date();
   const t = d.getTime();
   const nomeImage = t + '.jpg'
   return nomeImage;
 }
}

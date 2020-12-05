import { Injectable } from '@angular/core';

import { AngularFirestore,	AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';

import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import * as firebase from 'firebase';

import { Cliente } from 'src/app/models/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // private clientes: Array<Cliente> = [ ];

  constructor(private firestore: AngularFirestore, private file: File, private webview: WebView) {

  }

  async atualizar(cliente: Cliente, fotoAlterada: boolean) {
    console.log('Atualizar cliente', cliente);

    if (fotoAlterada) {
      let foto: string = cliente.foto;
      foto = foto.replace('http://localhost/', 'file://');
      const blobImagem = await this.criarBlobArquivoImagem(foto);

      let fotoAntiga: string = cliente.nomeFotoEnviada;

      await this.deletarImagem(fotoAntiga);

      cliente.nomeFotoEnviada = this.criarNomeImagem();

      cliente.uriFotoParaExibir = await this.uploadImagem(blobImagem,  cliente.nomeFotoEnviada);
    }
    
    return this.firestore.doc(`clientes/${cliente.id}`).update(cliente);
  }




  /*
  cadastrar(cliente: Cliente) {
    delete cliente.id;
    return this.firestore.collection('clientes').add(cliente);
  }
  */

  
 async cadastrar(cliente: Cliente) {
  
  
  try {
    delete cliente.id;
    let foto = cliente.foto;

    foto = foto.replace('http://localhost/', 'file://');

    const blobImagem = await this.criarBlobArquivoImagem(foto);

    cliente.nomeFotoEnviada = this.criarNomeImagem();

    cliente.uriFotoParaExibir = await this.uploadImagem(blobImagem,  cliente.nomeFotoEnviada);

    await this.firestore.collection('clientes').add(cliente);

  } catch (error) {
     console.log(error);
  }

 }


 async deletarImagem(nomeImagem) {
  try {
    nomeImagem = 'fotosCliente/'+nomeImagem;

    await firebase.storage().ref().child(nomeImagem).delete();
  } catch (error) {
    console.log(error);
  }
 }


 
criarNomeImagem() {
  const d = new Date();
  const t = d.getTime();
  const nomeImage = t + '.jpg'
  return nomeImage;
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
          foto: dadosCliente.foto,
          uriFotoParaExibir: dadosCliente.uriFotoParaExibir,
          nomeFotoEnviada: dadosCliente.nomeFotoEnviada
        };
       
      }

      return {};
    });
  }

  deletar(id: string) {
    return this.firestore.doc(`clientes/${id}`).delete();
  }
  

  async uploadImagem(imagem, nomeImagem): Promise<string> {
    if (imagem) {
      try {
        nomeImagem = 'fotosCliente/'+nomeImagem;
        
        const resultadoUpload = await firebase.storage().ref().child(nomeImagem).put(imagem);
        const urlUpload = resultadoUpload.ref.getDownloadURL();
        // const urlUpload = 'https://firebasestorage.googleapis.com/v0/b/desenvolvimento-mobile-4e435.appspot.com/o/fotosClientes%2F1607022319566.jpg?alt=media&token=ffd05ff8-f7fc-4ae8-8d35-3f6dfd69b755';
        return urlUpload;
        
      } catch (error) {
          console.log(error);
      }
    }
  }


  criarBlobArquivoImagem(caminhoImagem) {
    return new Promise((resolve, reject)=>{
      this.file.resolveLocalFilesystemUrl(caminhoImagem).then((dadosArquivo)=>{

        const {name, nativeURL} = dadosArquivo;
        const path = nativeURL.substring( 0,  nativeURL.lastIndexOf('/'));
        
        return this.file.readAsArrayBuffer(path, name);

      }).then((buffer)=> {
          const blobImagem = new Blob([buffer], {
            type: 'image/jpeg'
          });

          resolve(blobImagem);

      }).catch((erro)=>{
          console.log(erro);
          reject(erro);
      });


    });

  }




}



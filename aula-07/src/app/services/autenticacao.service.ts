import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private usuarioLogado: boolean = false;

  constructor(private fireAuth: AngularFireAuth) {
  }

  logar(email: string, senha: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, senha);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  isUsuarioLogado() {
    return this.usuarioLogado;
  }

  setUsuarioLogado(value: boolean) {
    this.usuarioLogado = value;
  }
}

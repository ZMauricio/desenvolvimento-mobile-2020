import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string = '';
  public senha: string = '';

  constructor(private autenticacao: AutenticacaoService,
              private router: Router) {

    this.autenticacao.logout().then((dados)=>{
      this.autenticacao.setUsuarioLogado(false);
    }).catch((erro)=>{
      console.log('Erro Logout:'+erro);
    });

  }

  ngOnInit() {
  }

  logar() {
    this.autenticacao.logar(this.email, this.senha).then((resposta)=>{

      console.log('resposta', resposta);

      this.autenticacao.setUsuarioLogado(true);

      this.router.navigate(['/lista-servicos']);

    }).catch((erro)=>{
      console.log('Erro no login:', erro);
    });
  }


}

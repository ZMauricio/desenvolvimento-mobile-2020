import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AutenticacaoService } from '../services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private autenticacao: AutenticacaoService) { }

  canActivate(): Observable<boolean> | boolean {

    if (this.autenticacao.isUsuarioLogado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}

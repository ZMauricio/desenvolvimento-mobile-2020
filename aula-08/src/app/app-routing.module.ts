import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lista-servicos',
    loadChildren: () => import('./paginas/lista-servicos/lista-servicos.module').then( m => m.ListaServicosPageModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'servicos-detalhes/:id',
    loadChildren: () => import('./paginas/servicos-detalhes/servicos-detalhes.module').then( m => m.ServicosDetalhesPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./paginas/admin/admin.module').then( m => m.AdminPageModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'cliente-detalhes/:id',
    loadChildren: () => import('./paginas/clientes/cliente-detalhes/cliente-detalhes.module').then( m => m.ClienteDetalhesPageModule)
  },
  {
    path: 'clientes-lista',
    loadChildren: () => import('./paginas/clientes/clientes-lista/clientes-lista.module').then( m => m.ClientesListaPageModule)
  },
  {
    path: 'cliente-novo',
    loadChildren: () => import('./paginas/clientes/cliente-novo/cliente-novo.module').then( m => m.ClienteNovoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 /* {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  */
 
  {
    path: '',
    loadChildren: () => import('./view/pipe-impuro/pipe-impuro.module').then( m => m.PipeImpuroPageModule)
  },
  {
    path: 'exemplo-pipes',
    loadChildren: () => import('./view/exemplo-pipes/exemplo-pipes.module').then( m => m.ExemploPipesPageModule)
  },
  {
    path: 'exemplo-pipes',
    loadChildren: () => import('./view/exemplo-pipes/exemplo-pipes.module').then( m => m.ExemploPipesPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'exemplo-pipe-puro',
    loadChildren: () => import('./view/exemplo-pipe-puro/exemplo-pipe-puro.module').then( m => m.ExemploPipePuroPageModule)
  },
  {
    path: 'pipe-impuro',
    loadChildren: () => import('./view/pipe-impuro/pipe-impuro.module').then( m => m.PipeImpuroPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

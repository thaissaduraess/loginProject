import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'atividades'
  },
  {
    path: 'atividades',
    loadChildren: () => import('./atividades/atividades.module').then(m => m.AtividadesModule)
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

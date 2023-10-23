import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginCadastroComponent } from './modules/login/login-cadastro/login-cadastro.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'atividades'},
  {
    path: 'atividades',
    loadChildren: () => import('./components/atividades/atividades.module').then(m => m.AtividadesModule)
  },
  {
    path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {
    path: 'login-cadastro', component: LoginCadastroComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

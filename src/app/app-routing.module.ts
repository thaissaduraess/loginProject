import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginCadastroComponent } from './modules/login/login-cadastro/login-cadastro.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginModule } from './modules/login/login.module';
import { AtividadesModule } from './components/atividades/atividades.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'atividades' },
  {
    path: 'atividades',
    loadChildren: () => AtividadesModule,
  },
  {
    path: 'login',
    loadChildren: () => LoginModule,
  },
  {
    path: 'login-cadastro',
    component: LoginCadastroComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

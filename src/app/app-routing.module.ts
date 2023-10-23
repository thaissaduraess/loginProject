import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginCadastroComponent } from './components/login-cadastro/login-cadastro.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthModule } from './modules/auth/auth.module';
import { AtividadesModule } from './components/atividades/atividades.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'atividades',
    loadChildren: () => AtividadesModule,
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule,
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

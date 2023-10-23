import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthModule } from './modules/auth/auth.module';
import { AtividadesModule } from './components/atividades/atividades.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'atividades',
    loadChildren: () => AtividadesModule,
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule,
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

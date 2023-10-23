import { LoginCadastroComponent } from '../../components/login-cadastro/login-cadastro.component';
import { RouterModule, Routes } from '@angular/router';

import { RecuperaSenhaComponent } from '../../components/recupera-senha/recupera-senha.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AuthComponent },
      { path: 'cadastro', component: LoginCadastroComponent },
      { path: 'recuperar', component: RecuperaSenhaComponent },
    ],
  },
];

export const AuthRoutes = RouterModule.forChild(routes);

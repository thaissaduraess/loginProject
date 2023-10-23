import { RegisterComponent } from '../../components/register/register.component';
import { RouterModule, Routes } from '@angular/router';

import { RecuperaSenhaComponent } from '../../components/recupera-senha/recupera-senha.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from 'src/app/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegisterComponent },
      { path: 'recuperar', component: RecuperaSenhaComponent },
    ],
  },
];

export const AuthRoutes = RouterModule.forChild(routes);

import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { RouterModule, Routes } from '@angular/router';

import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent,

  children: [
    { path: 'cadastro', component: LoginCadastroComponent },
    { path: 'recuperar', component: RecuperaSenhaComponent},
]},

];

export const LoginRoutes = RouterModule.forChild(routes);

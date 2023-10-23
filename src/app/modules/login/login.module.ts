import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginCadastroComponent,
    RecuperaSenhaComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }

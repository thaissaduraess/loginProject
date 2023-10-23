import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutes } from './auth-routing';
import { AuthComponent } from './auth.component';
import { LoginComponent } from 'src/app/components/login/login.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [CommonModule, AuthRoutes],
})
export class AuthModule {}

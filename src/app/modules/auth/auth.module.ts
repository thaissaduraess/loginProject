import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutes } from './auth-routing';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutes],
})
export class AuthModule {}

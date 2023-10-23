import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtividadesListaComponent } from '../components/atividades/atividades-lista/atividades-lista.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    AtividadesListaComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  exports: [
    NavbarComponent,
    AtividadesListaComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}

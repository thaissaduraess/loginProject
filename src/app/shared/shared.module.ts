import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtividadesListaComponent } from '../components/atividades/atividades-lista/atividades-lista.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AtividadesListaComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent, AtividadesListaComponent, DashboardComponent, PageNotFoundComponent]
})
export class SharedModule { }

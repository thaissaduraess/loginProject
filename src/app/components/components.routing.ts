import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadesListaComponent } from './atividades/atividades-lista/atividades-lista.component';

const routes: Routes = [
  { path: '', component: AtividadesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtividadesRoutingModule { }

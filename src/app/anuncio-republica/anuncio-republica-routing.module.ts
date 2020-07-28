import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnuncioRepublicaPage } from './anuncio-republica.page';

const routes: Routes = [
  {
    path: '',
    component: AnuncioRepublicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnuncioRepublicaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnuncioRepublicaPageRoutingModule } from './anuncio-republica-routing.module';

import { AnuncioRepublicaPage } from './anuncio-republica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnuncioRepublicaPageRoutingModule
  ],
  declarations: [AnuncioRepublicaPage]
})
export class AnuncioRepublicaPageModule {}

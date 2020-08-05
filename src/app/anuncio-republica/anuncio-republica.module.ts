import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';

import { IonicModule } from '@ionic/angular';

import { AnuncioRepublicaPageRoutingModule } from './anuncio-republica-routing.module';
import { AnuncioRepublicaPage } from './anuncio-republica.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnuncioRepublicaPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [AnuncioRepublicaPage]
})
export class AnuncioRepublicaPageModule {}

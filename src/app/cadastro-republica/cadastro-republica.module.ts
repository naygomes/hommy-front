import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';

import { IonicModule } from '@ionic/angular';

import { CadastroRepublicaPageRoutingModule } from './cadastro-republica-routing.module';

import { CadastroRepublicaPage } from './cadastro-republica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroRepublicaPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [CadastroRepublicaPage]
})
export class CadastroRepublicaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';

import { IonicModule } from '@ionic/angular';

import { CadastroUsuarioPageRoutingModule } from './cadastro-usuario-routing.module';

import { CadastroUsuarioPage } from './cadastro-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroUsuarioPageRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule
  ],
  declarations: [CadastroUsuarioPage]
})
export class CadastroUsuarioPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritasPageRoutingModule } from './favoritas-routing.module';

import { FavoritasPage } from './favoritas.page';

import { MiniCardComponent } from '../components/mini-card/mini-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritasPageRoutingModule
  ],
  declarations: [FavoritasPage, MiniCardComponent]
})
export class FavoritasPageModule {}

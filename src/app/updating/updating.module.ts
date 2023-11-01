import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatingPageRoutingModule } from './updating-routing.module';

import { UpdatingPage } from './updating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatingPageRoutingModule
  ],
  declarations: [UpdatingPage]
})
export class UpdatingPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudRecipeComponent } from 'app/components/crud-recipe/crud-recipe.component';
import { IonicModule } from '@ionic/angular';

import { ReadPageRoutingModule } from './read-routing.module';

import { ReadPage } from './read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadPageRoutingModule
  ],
  declarations: [ReadPage, CrudRecipeComponent]
})
export class ReadPageModule {}

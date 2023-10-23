import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SearchComponent } from 'app/components/search/search.component';
import { LobbyPageRoutingModule } from './lobby-routing.module';

import { LobbyPage } from './lobby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LobbyPageRoutingModule
  ],
  declarations: [LobbyPage, SearchComponent]
})
export class LobbyPageModule {}

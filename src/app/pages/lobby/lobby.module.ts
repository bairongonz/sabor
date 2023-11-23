import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SearchComponent } from 'app/components/search/search.component';
import { OpsUserComponent } from 'app/components/ops-user/ops-user.component';
import { LobbyPageRoutingModule } from './lobby-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LobbyPage } from './lobby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LobbyPageRoutingModule
  ],
  declarations: [LobbyPage, SearchComponent, OpsUserComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LobbyPageModule {}

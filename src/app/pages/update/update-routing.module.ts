import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatingPage } from 'app/pages/updating/updating.page';
import { UpdatePage } from './update.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePage
  },
  { path: 'content/:nombre/:ingredientes/:preparacion/:key', component:UpdatingPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePageRoutingModule {}

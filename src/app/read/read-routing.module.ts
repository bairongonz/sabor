import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPage } from 'app/content/content.page';
import { ReadPage } from './read.page';

const routes: Routes = [
  {
    path: '',
    component: ReadPage
  },
  { path: 'content/:nombre/:ingredientes/:preparacion', component:ContentPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadPageRoutingModule {}

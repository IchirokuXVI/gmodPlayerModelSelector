import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerModelSelectorComponent } from './player-model-selector.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerModelSelectorComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerModelSelectorRoutingModule { }

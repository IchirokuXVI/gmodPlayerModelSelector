import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'playerModelSelector',
    loadChildren: () => import('./modules/player-model-selector/player-model-selector.module').then((m) => m.PlayerModelSelectorModule)
  },
  {
    path: '**',
    redirectTo: 'playerModelSelector'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

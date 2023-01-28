import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerModelSelectorRoutingModule } from './player-model-selector-routing.module';
import { TabsComponent } from './components/tabs/tabs.component';
import { SelectPlayerModelComponent } from './components/tabs/select-player-model/select-player-model.component';
import { SelectNPCComponent } from './components/tabs/select-npc/select-npc.component';
import { ConfigComponent } from './components/tabs/config/config.component';
import { PlayerModelConfigFormComponent } from './components/player-model-config-form/player-model-config-form.component';
import { NpcConfigFormComponent } from './components/npc-config-form/npc-config-form.component';


@NgModule({
  declarations: [ 
    TabsComponent, SelectPlayerModelComponent, SelectNPCComponent, ConfigComponent, PlayerModelConfigFormComponent, NpcConfigFormComponent
  ],
  imports: [
    CommonModule,
    PlayerModelSelectorRoutingModule
  ]
})
export class PlayerModelSelectorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListhomeComponent } from './listhome/listhome.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListsComponent } from './item-lists/item-lists.component';


@NgModule({
  declarations: [
    ListhomeComponent,
    StatisticsComponent,
    ItemListsComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ]
})
export class ListsModule { }

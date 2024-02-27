import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { GamesListingComponent } from './games-listing/games-listing.component';
import { GameCardComponent } from './game-card/game-card.component';


@NgModule({
  declarations: [
    HomepageComponent,
    GamesListingComponent,
    GameCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListModule { }

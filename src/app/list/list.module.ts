import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { GamesListingComponent } from './games-listing/games-listing.component';
import { GameCardComponent } from './game-card/game-card.component';
import { HttpClientModule } from '@angular/common/http';
import { GamePageComponent } from './game-page/game-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomepageComponent,
    GamesListingComponent,
    GameCardComponent,
    GamePageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ListModule { }

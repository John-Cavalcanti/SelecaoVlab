import { Component } from '@angular/core';
import { GameCardComponent } from '../../components/game-card/game-card.component';

@Component({
  selector: 'app-games-listing',
  templateUrl: './games-listing.component.html',
  styleUrl: './games-listing.component.scss'
})
export class GamesListingComponent {

  games = []
}

import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games/games.service';

@Component({
  selector: 'app-games-listing',
  templateUrl: './games-listing.component.html',
  styleUrls: ['./games-listing.component.scss'],
})
export class GamesListingComponent implements OnInit {

  games = []
  gamesJson: any = ''

  constructor(
    private myGamesApiService : GamesService
  )
  {}

  ngOnInit(): void {
      this.getGames()
  }

  getGames() : void
  {
    this.myGamesApiService.getAllGames().subscribe(
      (data: any[]) =>
      {
        this.gamesJson = data

        console.log(this.gamesJson)
      },
      (error) =>
      {
        console.log("Erro ao tentar obter os jogos : ", error)
      }
    )
  }
}

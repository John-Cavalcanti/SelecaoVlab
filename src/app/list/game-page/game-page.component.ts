import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games/games.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent implements OnInit {

  gameData: any;

  constructor(
    private myGameApiService: GamesService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.pipe(
    
      catchError(() => throwError("Não foi possível obter o id do game"))
    
      ).subscribe(params => {
      
      const paramId = params.get('id');
      const gameId = paramId ? parseInt(paramId, 10) : -1;
      this.getGameInfo(gameId);
    
    });
  }

  private getGameInfo(gameId: number): void {

    if (gameId !== -1) {
    
      this.myGameApiService.getGameInfoById(gameId).subscribe(
    
        (data: any) => {
    
          this.gameData = data;
          console.log(this.gameData);
    
        }
      );
    }
  }
}

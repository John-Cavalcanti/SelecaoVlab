import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  @Input()
  gameInfo: any = {}
  gameId: number = -1; // atribuindo -1 para quando gameinfo ainda nao foi instanciado

  constructor(
    private myRouter: Router
  )
  {}

  openGamePageById(): void
  {
    this.gameId = this.gameInfo.id

    if (this.gameInfo.id) {
      this.myRouter.navigate(['/game', this.gameInfo.id]);
    }
  }

}

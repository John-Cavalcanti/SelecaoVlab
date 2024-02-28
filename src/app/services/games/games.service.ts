import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  baseUrl = "http://localhost:4123/https://www.freetogame.com/api/";

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<any>{
    return this.http.get(this.baseUrl + "games");
  }

  getGameInfoById(id: number): Observable<any>
  {
    return this.http.get(this.baseUrl + "game?id=" + id)
  }
}

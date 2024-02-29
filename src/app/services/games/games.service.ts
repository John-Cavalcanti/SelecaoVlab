import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Filters } from '../../models/Filters';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  baseUrl = "http://localhost:4123/https://www.freetogame.com/api/";

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<any> {
    return this.http.get(this.baseUrl + "games");
  }

  getGamesByFilterAndOrder(filters: Filters, orderBy: any): Observable<any> {

    let paramsStr: string = "games?"
    let filterStr: string = ""
    let newFilter: string = ""
    let orderStr: string = "sort-by=" + orderBy


    if (filters.platform != '') {

      console.log(filters.platform)

      if(filters.platform == "pc (windows)") 
      {
        newFilter = "pc";
      }
      if(filters.platform == "web browser") 
      {
        newFilter = "browser";
      }
      if(filters.platform == "pc (windows), web browser") 
      {
        newFilter = "pc&platform=browser";
      }

      filterStr += "platform=" + newFilter

      if (filters.category != '') {
        
        filterStr += "&category=" + filters.category
      
        
      }
    }else if (filters.category != '') {
      
      filterStr += "category=" + filters.category
    }

    // esses ifs pressupoem que va existir pelo menos 
    // ou um valor pra orderBy
    // ou os valores de filter estão preenchidos
    if (!orderBy) {
      //filters
      //console.log(filterStr)
      return this.http.get(this.baseUrl + paramsStr + filterStr)
    }
    if (filters.category == '' && filters.platform == '') {
      //console.log(orderBy)
      return this.http.get(this.baseUrl + paramsStr + orderStr)
    }

    // caso os dois ifs nao se complementem o ultimo caso eh gerado
    // onde os dois tipos de dado existem
    
    let finalStr: string = this.baseUrl + paramsStr + filterStr + "&" + orderStr
    // exemplo
    // games?platform=browser&category=mmorpg&sort-by=release-date
    return this.http.get(finalStr)
  }

  getGameInfoById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "game?id=" + id)
  }
}

import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games/games.service';
import { Filters } from '../../models/Filters';
import { filter } from 'rxjs';

@Component({
  selector: 'app-games-listing',
  templateUrl: './games-listing.component.html',
  styleUrls: ['./games-listing.component.scss'],
})
export class GamesListingComponent implements OnInit {

  games = []
  gamesJson: any[] = []

  platformFilters: string[] = []
  categoryFilters: string[] = []
  developerFilters: string[] = []
  releaseYearFilters: string[] = []
  
  orderByFilter: string = ''
  chosenPlatformFilter: string = ''
  chosenCategoryFilter: string = ''
  chosenDeveloperFilter: string = ''
  chosenReleaseYearFilter: string = ''

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

        data.forEach( (value) => 
        {
          if(!this.platformFilters.includes(value.platform))
          {
            this.platformFilters.push(value.platform)
          }
          
          if(!this.categoryFilters.includes(value.genre))
          {
            this.categoryFilters.push(value.genre)
          }

          let devStr:string = value.developer.toString(); 
          let filterDeveloper = devStr.trim();

          if(!this.developerFilters.includes(filterDeveloper))
          {
            this.developerFilters.push(value.developer)
          }

          let releaseYear = value.release_date.slice(0,4)

          if(!this.releaseYearFilters.includes(releaseYear))
          {
            this.releaseYearFilters.push(releaseYear)
          }
          
        })

        //this.developerFilters = this.developerFilters.map(str => str.trim());
        this.developerFilters.sort();
        this.releaseYearFilters.sort((a,b) => Number(b) - Number(a));
        this.releaseYearFilters = this.releaseYearFilters.map(num => num.toString());

        console.log(this.gamesJson)
      },
      (error) =>
      {
        this.gamesJson = []
        console.log("Erro ao tentar obter os jogos : ", error)
      }
    )
  }

  getGamesByFilterAndOrder()
  {

    let filters: Filters = {
      platform : '',
      category: '',
    }

    if(this.chosenPlatformFilter)
    {
      filters.platform = this.chosenPlatformFilter.toLowerCase()
    }
    if(this.chosenCategoryFilter)
    {
      filters.category = this.chosenCategoryFilter.toLowerCase()
    }
    
    if(filters.category == '' && filters.platform == '' && this.chosenDeveloperFilter == '' && this.orderByFilter == '')
    {
      this.getGames()
    }else{
      
      this.myGamesApiService.getGamesByFilterAndOrder(filters,this.orderByFilter).subscribe(
        (data:any[]) =>
        {
          if(this.chosenDeveloperFilter == '' && this.chosenReleaseYearFilter == '')
          {
            this.gamesJson = data
          }else
          {
            this.gamesJson = []

            data.forEach((value) => {
              let releaseYear = value.release_date.slice(0,4)
              
              
              if(value.developer == this.chosenDeveloperFilter || value.developer == " " + this.chosenDeveloperFilter)
              {
                if(releaseYear == this.chosenReleaseYearFilter || this.chosenReleaseYearFilter == '')
                {
                  this.gamesJson.push(value) 
                }
              }else if(releaseYear == this.chosenReleaseYearFilter)
              {
                if(this.chosenDeveloperFilter == '')
                {
                  this.gamesJson.push(value) 
                }
                
              }
            })
          }
          
        },
        (error) =>
        {
          this.gamesJson = []
          console.log("Erro ao tentar obter os jogos : ", error)
        }
    )}
    
  }
}

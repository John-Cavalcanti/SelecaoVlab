import { TestBed } from '@angular/core/testing';
import { GamesService } from './games.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GamesService', () => {
  let service: GamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
    });
    service = TestBed.inject(GamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllGames', () => {
    const getAllGamesSpy = spyOn(service, 'getAllGames').and.callThrough();

    service.getAllGames();

    expect(getAllGamesSpy).toHaveBeenCalled();
  });
});

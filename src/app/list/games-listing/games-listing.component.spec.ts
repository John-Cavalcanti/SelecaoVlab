import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GamesListingComponent } from './games-listing.component';
import { GamesService } from '../../services/games/games.service';

describe('GamesListingComponent', () => {
  let component: GamesListingComponent;
  let fixture: ComponentFixture<GamesListingComponent>;
  let gamesServiceSpy: jasmine.SpyObj<GamesService>;

  beforeEach(
    waitForAsync(() => {
      gamesServiceSpy = jasmine.createSpyObj('GamesService', ['getAllGames', 'getGamesByFilterAndOrder']);

      TestBed.configureTestingModule({
        declarations: [GamesListingComponent],
        providers: [{ provide: GamesService, useValue: gamesServiceSpy }],
        imports: [FormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListingComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the HTML elements', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    // Verificar se os elementos HTML estão presentes
    expect(compiled.querySelector('.platform-filter')).toBeTruthy();
    expect(compiled.querySelector('.category-filter')).toBeTruthy();
  });
});


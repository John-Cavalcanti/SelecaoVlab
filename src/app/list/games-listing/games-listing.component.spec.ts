import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesListingComponent } from './games-listing.component';

describe('GamesListingComponent', () => {
  let component: GamesListingComponent;
  let fixture: ComponentFixture<GamesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

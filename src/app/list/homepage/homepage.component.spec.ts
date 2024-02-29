import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // checando de o h2 foi gerado corretamente com sua classe
  it('Should have the correct html structure',() =>
  {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelectot('h2.page-title')).toBeTruthy();
  })
});

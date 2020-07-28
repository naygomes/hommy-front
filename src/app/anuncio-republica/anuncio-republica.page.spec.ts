import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnuncioRepublicaPage } from './anuncio-republica.page';

describe('AnuncioRepublicaPage', () => {
  let component: AnuncioRepublicaPage;
  let fixture: ComponentFixture<AnuncioRepublicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioRepublicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnuncioRepublicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

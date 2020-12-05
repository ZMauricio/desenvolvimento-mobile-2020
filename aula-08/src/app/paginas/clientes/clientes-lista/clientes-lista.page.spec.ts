import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesListaPage } from './clientes-lista.page';

describe('ClientesListaPage', () => {
  let component: ClientesListaPage;
  let fixture: ComponentFixture<ClientesListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

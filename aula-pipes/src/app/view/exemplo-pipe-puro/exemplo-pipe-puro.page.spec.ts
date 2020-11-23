import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExemploPipePuroPage } from './exemplo-pipe-puro.page';

describe('ExemploPipePuroPage', () => {
  let component: ExemploPipePuroPage;
  let fixture: ComponentFixture<ExemploPipePuroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploPipePuroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploPipePuroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

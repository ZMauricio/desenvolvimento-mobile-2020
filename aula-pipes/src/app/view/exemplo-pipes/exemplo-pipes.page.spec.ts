import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExemploPipesPage } from './exemplo-pipes.page';

describe('ExemploPipesPage', () => {
  let component: ExemploPipesPage;
  let fixture: ComponentFixture<ExemploPipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploPipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploPipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

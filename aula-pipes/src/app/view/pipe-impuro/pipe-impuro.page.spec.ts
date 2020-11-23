import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PipeImpuroPage } from './pipe-impuro.page';

describe('PipeImpuroPage', () => {
  let component: PipeImpuroPage;
  let fixture: ComponentFixture<PipeImpuroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeImpuroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PipeImpuroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

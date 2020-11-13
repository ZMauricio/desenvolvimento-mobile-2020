import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormExemploPage } from './form-exemplo.page';

describe('FormExemploPage', () => {
  let component: FormExemploPage;
  let fixture: ComponentFixture<FormExemploPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExemploPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormExemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

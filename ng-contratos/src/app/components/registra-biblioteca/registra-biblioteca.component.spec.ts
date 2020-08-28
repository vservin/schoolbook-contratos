import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraBibliotecaComponent } from './registra-biblioteca.component';

describe('RegistraBibliotecaComponent', () => {
  let component: RegistraBibliotecaComponent;
  let fixture: ComponentFixture<RegistraBibliotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraBibliotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

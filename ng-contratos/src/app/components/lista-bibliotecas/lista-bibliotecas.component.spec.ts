import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBibliotecasComponent } from './lista-bibliotecas.component';

describe('ListaBibliotecasComponent', () => {
  let component: ListaBibliotecasComponent;
  let fixture: ComponentFixture<ListaBibliotecasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBibliotecasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBibliotecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

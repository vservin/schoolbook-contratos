import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaContratoComponent } from './captura-contrato.component';

describe('CapturaContratoComponent', () => {
  let component: CapturaContratoComponent;
  let fixture: ComponentFixture<CapturaContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturaContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

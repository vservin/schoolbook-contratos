import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sb-captura-contrato',
  templateUrl: './captura-contrato.component.html',
  styleUrls: ['./captura-contrato.component.scss']
})
export class CapturaContratoComponent implements OnInit, OnDestroy {
  private _onDestroy: Subject<void>;
  private _contratoForm: FormGroup;
  private _escuelaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  get contrato(): FormGroup {
    return this._contratoForm;
  }

  get escuela(): FormGroup {
    return this._escuelaForm;
  }

  ngOnInit(): void {
    this._onDestroy = new Subject();
    this._escuelaForm = this.formBuilder.group({
      clave: ['', [Validators.required, Validators.maxLength(10)]],
      nombre: ['', [Validators.required, Validators.maxLength(100)]]
    });
    this._contratoForm = this.formBuilder.group({
      renovacion: [false],
      escuelaAsociada: { value: '', disabled: true },
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      responsable: ['', [Validators.required]],
      documento: [''],
      contratoAnterior: ['']
    });
    this.contrato.get('renovacion').valueChanges.pipe(takeUntil(this._onDestroy)).subscribe((valor: boolean) => {
      const contratoAnteriorControl = this._contratoForm.get('contratoAnterior');
      if (valor) {
        contratoAnteriorControl.setValidators([Validators.required]);
      } else {
        contratoAnteriorControl.setValidators([]);
      }
      contratoAnteriorControl.updateValueAndValidity();
    });
    this.escuela.get('nombre').valueChanges.pipe(takeUntil(this._onDestroy)).subscribe((nombre: string) => {
      this.contrato.get('escuelaAsociada').setValue(nombre);
    });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.unsubscribe();
  }

  submit(): void {

  }

}

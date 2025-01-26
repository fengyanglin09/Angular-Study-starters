import { Directive } from '@angular/core';
import {AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[btLibsUtilCrossFieldsCheck]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CrossFieldsCheckDirective, multi: true }]

})
export class CrossFieldsCheckDirective implements Validator{
  constructor() {}

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {

    if(control instanceof FormGroup) {
      const password: string = control.get('firstPassword')?.value ?? '';
      const confirm: string = control.get('confirmedPassword')?.value ?? '';

      return password === confirm ? null : {btLibsUtilCrossFieldsCheck: {valid: false}};
    }
    return null;
  }
}

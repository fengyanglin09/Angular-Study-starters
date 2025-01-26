import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";


@Directive({
  selector: '[btLibsUtilMaxWordCount]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaxWordCountDirective,
    multi: true
  }]
})
export class MaxWordCountDirective implements Validator{

  @Input('btLibsUtilMaxWordCount') maxWords = 1;


  constructor() {}

  registerOnValidatorChange(fn: () => void): void {
  }

  /**
   * When the validation passes, we will return null, and when the validation doesn’t pass, we will return a ValidationErrors object.
   * */

  validate(control: AbstractControl): ValidationErrors | null {

    const wordCount = control?.value?.trim().split(' ').length;

    return wordCount > this.maxWords ?   {btLibsUtilMaxWordCount: { count: wordCount }} : null;


  }
}

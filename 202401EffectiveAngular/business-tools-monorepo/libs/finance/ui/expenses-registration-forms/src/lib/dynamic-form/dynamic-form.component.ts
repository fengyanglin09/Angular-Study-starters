import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicControl} from "../data-models/dynamic-form.interface";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'bt-libs-ui-dynamic-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnChanges{



    // shows example of the input form configuration
  @Input() formModelConfig: DynamicControl[] = [
    {
      controlKey: 'description', formFieldType: 'input',
      inputType: 'text', label: 'Description',
      defaultValue: '', updateOn: 'change',
      validators: [Validators.required]
    },
    {
      controlKey: 'amount', formFieldType: 'input',
      inputType: 'number', label: 'Amount excl. VAT',
      defaultValue: null, updateOn: 'change',
      validators: [Validators.required]
    }
  ]

  formModel = new FormGroup({});

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['formModelConfig']) {
    this.formModel = new FormGroup({});
    this.formModelConfig.forEach((control) => {
      this.formModel.addControl(
        control.controlKey,
        new FormControl(control.defaultValue, { updateOn: control.updateOn, validators: control.validators }));
    }); }

  }

  @Output() outputForm = new EventEmitter();

  onSubmit() {
    this.outputForm.emit(structuredClone(this.formModel.value));
    this.formModel.reset();
  }

}

import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {AddExpense} from "./add-expense.interface";
import {CrossFieldsCheckDirective, MaxWordCountDirective} from "@bt-libs/shared/util/form-validators";

@Component({
  selector: 'bt-libs-ui-add-expense',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaxWordCountDirective, CrossFieldsCheckDirective],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseComponent {

  // Template driven form:

  @ViewChild('addExpenseForm') form!: NgForm;

  @Input() expenseToAdd: AddExpense = {
    description: '',
    amountExclVat: null,
    vatPercentage: null,
    date: null,
    password: {
      password: null,
      confirmPassword: null,
    }
  }

  @Output() addExpense = new EventEmitter<AddExpense>();

  onSubmit() {
    this.addExpense.emit(structuredClone(this.expenseToAdd));
    this.form.reset();
  }


  // -------------------------------------------------------------------


  // Reactive form:

  // @Input()
  // public set expenseToAdd(value: AddExpenseReactive) {
  //   this.addExpenseForm.patchValue(value);
  //
  //   this.addExpenseForm.controls.tags.clear();
  //   value.tags?.forEach(tag => {
  //     this.addExpenseForm.controls.tags.push(new FormControl(tag));
  //   });
  // }
  //
  // @Output() addExpense = new EventEmitter<AddExpenseReactive>();
  //
  // addExpenseForm = new FormGroup({
  //   description: new FormControl('', [Validators.required, maxWordCountValidator(3)]),
  //   amount: new FormGroup({
  //     amountExclVat: new FormControl<number | null>(null, [Validators.required]),
  //     vatPercentage: new FormControl<number | null>(null, [Validators.required, Validators.min(0), Validators.max(100)]),
  //   }),
  //   date: new FormControl([''], [Validators.required]),
  //   tags: new FormArray([
  //     new FormControl(''),
  //   ])
  // });
  //
  // addTag() {
  //   this.addExpenseForm.controls.tags.insert(0, new FormControl(''));
  // }
  //
  // removeTag(index: number) {
  //   this.addExpenseForm.controls.tags.removeAt(index);
  // }
  //
  // onSubmit() {
  //   this.addExpense.emit(structuredClone(this.addExpenseForm.value as AddExpenseReactive));
  //   this.addExpenseForm.reset();
  // }


}

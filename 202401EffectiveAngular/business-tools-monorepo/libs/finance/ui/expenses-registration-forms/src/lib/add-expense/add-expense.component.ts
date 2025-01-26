import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {CrossFieldsCheckDirective, MaxWordCountDirective} from "@bt-libs/shared/util/form-validators";
import {AddExpense} from "../data-models/add-expense.interface";

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


}

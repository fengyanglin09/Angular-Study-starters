import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AddExpenseComponent,
  AddExpenseReactiveComponent, DynamicControl,
  DynamicFormComponent
} from "@bt-libs/finance/ui/expenses-registration-forms";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-expenses-overview-page',
  imports: [CommonModule, AddExpenseComponent, AddExpenseReactiveComponent, DynamicFormComponent],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesOverviewPageComponent {

  formModelConfig: DynamicControl[] = [
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

}

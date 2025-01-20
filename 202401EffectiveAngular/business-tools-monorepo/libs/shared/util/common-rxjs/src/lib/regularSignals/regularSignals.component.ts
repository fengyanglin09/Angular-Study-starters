import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExpenseModel} from "../data-model/data-model-interface-signal";

@Component({
  selector: 'bt-libs-util-regular-signals',
  imports: [CommonModule],
  templateUrl: './regularSignals.component.html',
  styleUrl: './regularSignals.component.scss',
})
export class RegularSignalsComponent {

  expenses = signal<ExpenseModel[]>([
    {id: 1, name: 'Rent', amount: 1000},
    {id: 2, name: 'Groceries', amount: 100},
    {id: 3, name: 'Utilities', amount: 200},
    {id: 4, name: 'Car Payment', amount: 300},
    {id: 5, name: 'Insurance', amount: 100},
  ]);

  showDescription  = signal(true)

  onAddExpense() {
    this.expenses.update(expenses => [
      ...expenses,
      {id: expenses.length + 1, name: 'New Expense', amount: 0}
      ]
    );
  }

}

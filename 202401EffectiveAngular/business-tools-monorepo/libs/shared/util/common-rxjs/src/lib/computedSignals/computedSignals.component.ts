import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExpenseModel} from "../data-model/data-model-interface-signal";

function count() {

}

@Component({
  selector: 'bt-libs-util-computed-signals',
  imports: [CommonModule],
  templateUrl: './computedSignals.component.html',
  styleUrl: './computedSignals.component.scss',
})
export class ComputedSignalsComponent {

  count: WritableSignal<number> = signal(0);
  double: Signal<number> = computed(() => this.count() * 2);


  expenses = signal<ExpenseModel[]>([
    {id: 1, name: 'Rent', amount: 1000},
    {id: 2, name: 'Groceries', amount: 100},
    {id: 3, name: 'Utilities', amount: 200},
    {id: 4, name: 'Car Payment', amount: 300},
    {id: 5, name: 'Insurance', amount: 100},
  ]);

  updateTotal = signal(false);

  displayIfUpdateTotal = computed(() => {
    return this.updateTotal()? 'update total' : 'not update total'
  });

  totalInclVat = computed(() => this.updateTotal()? this.expenses().reduce((total, current ) => (current.amount + total), 0) : null);



  onAddExpense() {
    this.expenses.update(expenses => [
        ...expenses,
        {id: expenses.length + 1, name: 'New Expense', amount: 9}
      ]
    );
  }

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddExpenseComponent, AddExpenseReactiveComponent} from "@bt-libs/finance/ui/expenses-registration-forms";

@Component({
  selector: 'app-expenses-overview-page',
  imports: [CommonModule, AddExpenseComponent, AddExpenseReactiveComponent],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesOverviewPageComponent {}

import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ExpensesHttpService} from "../http/expenses-http.service";
import {catchError, map, of, switchMap} from "rxjs";
import {ExpenseModel} from "../models/expenses.interfaces";
import * as expenses from "../expenses";

@Injectable({ providedIn: 'root' })
export class ExpensesEffects {

  private readonly actions = inject(Actions);
  private readonly expensesApi = inject(ExpensesHttpService);



  fetchExpeses$ = createEffect(() =>
    this.actions.pipe(
      ofType(expenses.ExpenseActions.fetchExpenses.type),
      switchMap(() => this.expensesApi.get().pipe(
        map((expense: ExpenseModel[]) => expenses.ExpenseActions.fetchExpensesSuccess({ expenses: expense })),
        catchError(() => of(expenses.ExpenseActions.fetchExpensesFailed()))
      ))
    )
  );

}

import {inject, Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import * as ExpenseActions from "../../../index";

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  protected readonly store = inject(Store);


  fetchExpenses() {
    this.store.dispatch(ExpenseActions.ExpenseActions.fetchExpenses());
    return this.store.select(ExpenseActions.ExpenseSelectors.selectExpenses);
  }

  adjustVat() {
    this.store.dispatch(ExpenseActions.ExpenseActions.adjustVat());
    return this.store.select(ExpenseActions.ExpenseSelectors.selectInclVat);
  }

  constructor() { }
}

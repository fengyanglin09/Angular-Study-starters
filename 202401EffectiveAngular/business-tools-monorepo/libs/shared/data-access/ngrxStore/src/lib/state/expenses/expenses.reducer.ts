import {ExpensesState} from "../models/expenses.interfaces";
import {createReducer} from "@ngrx/store";
import {on} from "@ngrx/store";
import * as myExpense from "../expenses";

export const initialExpensesState: Readonly<ExpensesState> = {
  expenses: [],
  selectedExpense: null,
  isLoading: false,
  inclVat: false,
  error: null
};


export const expensesReducer =
  createReducer<ExpensesState>(
    initialExpensesState,
    on(myExpense.ExpenseActions.fetchExpenses, state => ({
      ...state,
      isLoading: true
    })),
    on(myExpense.ExpenseActions.fetchExpensesSuccess, (state, { expenses }) => ({
      ...state,
      isLoading: false,
      expenses,
      error: null
    })),
    on(myExpense.ExpenseActions.fetchExpensesFailed, (state) => ({
      ...state,
      isLoading: false,
      error: 'Failed to fetch expenses!'
    })),
    on(myExpense.ExpenseActions.adjustVat, (state) => ({
      ...state,
      inclVat: !state.inclVat
    })),
  );



///-------------------------------------------------
export const expensesFeatureKey = 'expensesFeatureKey';

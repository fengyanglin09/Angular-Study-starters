import {createAction, props} from "@ngrx/store";
import {ExpenseModel} from "../models/expenses.interfaces";

export const fetchExpenses = createAction(`[Expenses] Fetch Expenses`);

export const fetchExpensesSuccess = createAction(`[Expenses] Fetch Expenses Success`, props<{ expenses: ExpenseModel[] }>());

export const fetchExpensesFailed = createAction(`[Expenses] Fetch Expenses Failed`);


//---------------------------------------------------------------------------------------------

export const adjustVat = createAction(`[Expenses] Adjust incl vat`);

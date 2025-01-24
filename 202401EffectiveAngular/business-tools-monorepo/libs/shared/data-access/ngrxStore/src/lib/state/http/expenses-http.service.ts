import { Injectable } from '@angular/core';
import {ExpenseModel} from "../models/expenses.interfaces";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpensesHttpService {

  constructor() { }

  get(){

    const mockExpenses: ExpenseModel[][] = [
      [{ id: 1, description: 'Office Supplies', amount: { value: 100, vatPercentage: 20 }, date: '2023-01-01', tags: ['office', 'supplies'] }],
      [{ id: 2, description: 'Travel', amount: { value: 200, vatPercentage: 10 }, date: '2023-02-01', tags: ['travel'] }],
      [{ id: 3, description: 'Software', amount: { value: 300, vatPercentage: 15 }, date: '2023-03-01', tags: ['software'] }],
      [{ id: 4, description: 'Consulting', amount: { value: 400, vatPercentage: 5 }, date: '2023-04-01', tags: ['consulting'] }]
    ];

    return from(mockExpenses)
  }
}

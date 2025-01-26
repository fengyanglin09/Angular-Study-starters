import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ExpenseModel} from "../../data/data.model";

@Injectable({
  providedIn: 'root'
})
export class RxjsStateStoreService {

  private expenses = new BehaviorSubject<ExpenseModel[]>([]);
  expenses$ = this.expenses.asObservable();



  constructor() { }
}

import {inject, Injectable} from '@angular/core';
import {IExpensesFacade} from "./rxjsStateFacadeInterface";
import {Observable} from "rxjs";
import {StateMode} from "../mock-http/data-model";
import {RxjsStateService} from "@bt-libs/shared/data-access/common-states";

@Injectable({
  providedIn: 'root'
})
export class RxjsStateFacadeService implements IExpensesFacade{

  protected readonly rxjsStateStore = inject(RxjsStateService)

  constructor() { }

  rxjsStateSelector$: Observable<StateMode>;
  selectedRxjsStateSelector$: Observable<StateMode>;

  addState(state: StateMode): void {
    this.rxjsStateStore.addRxjsState(state)
  }

  clearStateSelection(): void {
    this.rxjsStateStore.resetRxjsState()
  }

  deleteState(id: number): void {
    this.rxjsStateStore.deleteRxjsState(id)
  }

  fetchStates(): void {
    this.rxjsStateStore.fetchRxjsState()
  }

  getState(id: number): void;
  getState(id: number): Observable<StateMode>;
  getState(id: number): void | Observable<StateMode> {
    return undefined;
  }

  resetStates(): void {
  }

  selectState(id: number): void {
  }

  updateState(expense: StateMode): void {
  }
}

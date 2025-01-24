import {Observable} from "rxjs";
import {StateMode} from "../mock-http/data-model";

export interface IExpensesFacade {
  rxjsStateSelector$: Observable<StateMode>;
  selectedRxjsStateSelector$: Observable<StateMode>;

  addState(state: StateMode): void;
  clearStateSelection(): void;
  deleteState(id: number): void;
  fetchStates(): void;
  getState(id: number): void;
  getState(id: number): Observable<StateMode>;
  resetStates(): void;
  selectState(id: number): void;
  updateState(expense: StateMode): void;
}

import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, from, of} from "rxjs";
import {StateMode} from "./data-model";

@Injectable({
  providedIn: 'root'
})
export class MockHttpService {

  protected readonly httpClient = inject(HttpClient);


  mockState: StateMode[] = Array.from({ length: 10 }, (_, i) => new StateMode(i + 1, `mock data${i + 1}`, i % 2 === 0))


  constructor() { }

  get(){
    return from(
      this.mockState
    ).pipe(delay(300))
  }

  post(state: StateMode){
    state.id = this.mockState.length + 1
    this.mockState.push(state)
    return of(state)
  }

  delete(id: number){
    let stateMode = this.mockState.find(state => state.id === id);
    this.mockState = this.mockState.filter(state => state.id !== id)
    return of(stateMode)
  }

  put(state: StateMode){
    let index = this.mockState.findIndex(state => state.id === state.id);
    this.mockState[index] = state;
    return of(state)
  }

  getById(id: number){
    return of(this.mockState.find(state => state.id === id))
  }


}

import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {StateMode} from "../mock-http/data-model";
import {MockHttpService} from "../mock-http/mock-http.service";


@Injectable({
  providedIn: 'root'
})
export class RxjsStateService {

  private rxjsState = new BehaviorSubject<StateMode>(null)

  rxjsStateObservable$ = this.rxjsState.asObservable()

  protected mockHttpService = inject(MockHttpService)

  fetchRxjsState(){
    this.mockHttpService.get().subscribe(
      {
        next: (data) => {
          this.rxjsState.next(data)
        },
        error: (error) => {
          console.error(error)
      }}
    )}

  addRxjsState(state: StateMode){
    this.mockHttpService.post(state).subscribe(
      {
        next: (data) => {
          this.rxjsState.next(data)
        },
        error: (error) => {
          console.error(error)
        }
      }
    )
  }

  deleteRxjsState(id: number){
    this.mockHttpService.delete(id).subscribe(
      {
        next: (data) => {
          this.rxjsState.next(data)
        },
        error: (error) => {
          console.error(error)
        }
      }
    )
  }

  getRxjsStateById(id: number) {
    this.mockHttpService.getById(id).subscribe(
      {
        next: (data) => {
          this.rxjsState.next(data)
        },
        error: (error) => {
          console.error(error)
        }
      })
  }

  updateRxjsState(state: StateMode){
    this.mockHttpService.put(state).subscribe(
      {
        next: (data) => {
          this.rxjsState.next(data)
        },
        error: (error) => {
          console.error(error)
        }
      }
    )
  }

  resetRxjsState(){
    this.rxjsState.next(null)
  }

  constructor() { }
}

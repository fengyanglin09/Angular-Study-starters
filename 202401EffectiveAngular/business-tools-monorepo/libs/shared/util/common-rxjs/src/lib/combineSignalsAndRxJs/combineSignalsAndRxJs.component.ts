import {Component, inject, Injector, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BehaviorSubject, Subject} from "rxjs";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'bt-libs-util-combine-signals-and-rx-js',
  imports: [CommonModule],
  templateUrl: './combineSignalsAndRxJs.component.html',
  styleUrl: './combineSignalsAndRxJs.component.scss',
})
export class CombineSignalsAndRxJsComponent implements OnInit, OnDestroy{


  observable$ = new Subject<string>()

  behaviorObservable$ = new BehaviorSubject<string>('initialValue');

  injector = inject(Injector);

  noneInjectionContext = toSignal(this.observable$,
    {injector: this.injector, manualCleanup: true, initialValue: 'noneInjectionContext'});







  ngOnInit(): void {

    let convertedSignal = toSignal(this.observable$);

    let mysignal = toSignal(this.behaviorObservable$, {requireSync: true, rejectErrors: true});

    toObservable(mysignal).subscribe({});

  }


  ngOnDestroy(): void {
  }


}

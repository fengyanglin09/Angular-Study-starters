import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {concatAll, concatMap, exhaustMap, fromEvent, interval, map, mergeMap, of, Subject, switchMap, take} from "rxjs";


/**
 *
 * it’s important to note that when you use the take(), takeUntil(), or takeUntilDestroyed() operators
 * inside the pipe of the outer Observable and also use flattening operators in the same pipe() function,
 * the take(), takeUntil(), and takeUntilDestroyed() operators need to be declared after the flattening operators.
 * The flattening operators will create their own Observables, and if you declare take(), takeUntil(), or
 * takeUntilDestroyed() before the flattening operator, the Observables created by the flattening operators will not be
 * unsubscribed and closed by take(), takeUntil(), or takeUntilDestroyed().
 *
 * */

@Component({
  selector: 'bt-libs-util-flatten-operators',
  imports: [CommonModule],
  templateUrl: './flattenOperators.component.html',
  styleUrl: './flattenOperators.component.scss',
})
export class FlattenOperatorsComponent {

  constructor() {
    // this.cancatMapDemo()
    // this.cancatAllDemo()

    // this.mergeMapDemo()

    this.switchMapDemo()
  }


  /**
   * cancat operator is used when you want the first value of the outer Observable and all its inner concatenated Observables
   * to complete before the second value of the outer Observable and its inner Observables are processed.
   * */
  cancatMapDemo(){
    const source = of('Hello', 'Goodbye');
    const example = source.pipe(
      concatMap(val => of(`${val} World1`,`${val} World2`,`${val} World3`))
    );
    const subscribe = example.subscribe(val => console.log(val));
  }

  // cancatAllDemo will yield the same results as cancatMapDemo
  cancatAllDemo(){
    const source = of('Hello', 'Goodbye');
    const example = source.pipe(
      map(val => of(`${val} World1`,`${val} World2`,`${val} World3`)),
      concatAll()
    );
    const subscribe = example.subscribe(val => console.log(val));
  }



  /**
   * result:
   * Hello World1
   * Hello World2
   * Goodbye World1
   * Hello World1
   * Hello World3
   * Goodbye World2
   *
   *
   * The result is due to the asynchronous nature of the `setInterval` functions and the `mergeMap` operator. Here's a breakdown of the events:
   *
   * 1. **Initial Emissions**:
   *    - `outerObservable` emits 'Hello' every 5000ms.
   *    - `outerObservable` emits 'Goodbye' every 7000ms.
   *
   * 2. **Inner Observable Emissions**:
   *    - For each 'Hello' and 'Goodbye' emitted by `outerObservable`, a new `innerObservable` is created.
   *    - Each `innerObservable` emits:
   *      - `${val} World1` every 3000ms.
   *      - `${val} World2` every 5000ms.
   *      - `${val} World3` every 7000ms.
   *
   * 3. **Resulting Emissions**:
   *    - The first 'Hello' is emitted, creating an `innerObservable` that starts emitting:
   *      - `Hello World1` at 3000ms.
   *      - `Hello World2` at 5000ms.
   *    - The first 'Goodbye' is emitted, creating another `innerObservable` that starts emitting:
   *      - `Goodbye World1` at 3000ms.
   *    - The second 'Hello' is emitted, creating another `innerObservable` that starts emitting:
   *      - `Hello World1` at 3000ms.
   *    - The first `innerObservable` continues to emit:
   *      - `Hello World3` at 7000ms.
   *    - The first `innerObservable` continues to emit:
   *      - `Goodbye World2` at 5000ms.
   *
   * The `mergeMap` operator subscribes to all inner observables simultaneously and emits their values as they arrive, leading to the interleaved output. The `take(6)` operator ensures that the subscription completes after receiving 6 values. The second `Hello World1` is from the second 'Hello' emission.
   *
   * */

  mergeMapDemo(){
  // mergeMap operator is used when you want to subscribe to all inner Observables at the same time
  // and emit their values as they arrive.
  // mergeMap is similar to switchMap, but it does not cancel the previous inner Observable.
  // const outerObservable = of('Hello', 'Goodbye');

  const outerObservable = new Subject();

  setInterval(()=>{outerObservable.next('Hello')},5000);

  setInterval(()=>{outerObservable.next('Goodbye')},7000);

  const example = outerObservable.pipe(
    mergeMap(val => {
        const innerObservable = new Subject();
        setInterval(()=>{innerObservable.next(`${val} World1`)},3000);

        setInterval(()=>{innerObservable.next(`${val} World2`)},5000);

        setInterval(()=>{innerObservable.next(`${val} World3`)},7000);

        return innerObservable;
    })
    // of(`${val} World1`, `${val} World2`, `${val} World3`))
  );

  const subscribe = example.pipe(take(6)).subscribe(val => console.log(val));
}

/**
 * The switchMap() operator will switch the Observable stream from the first to the second stream when the second stream starts
 * to emit values. The switchMap() operator will unsubscribe and complete the first stream so that the first stream will stop
 * emitting values; the next stream will keep emitting until that stream is completed or until another stream comes
 * */
  switchMapDemo(){
    const clicks = fromEvent(document, 'click');
    clicks.pipe(
      switchMap(() => interval(1000).pipe(take(4))),
    ).subscribe(x => console.log(x));
  }


  /**
   * The exhaustMap() operator will start to emit the values of the first Observable stream as soon as it starts to emit values.
   * The exhaustMap() operator will not process any other Observable streams that come in while the first stream is still running.
   *
   * In the preceding example, where we used the exhaustMap() operator and clicked and waited for 2 seconds before we made another
   * click, only the first click will be processed because the first stream takes 4 seconds to complete. So, when we make the second
   * click, the first stream is not completed yet, so exhaustMap() doesn’t process the second stream. The log of the preceding code
   * will look like 0, 1, 3, 4.
   *
   *  */
  exhaustMapDemo(){
    const clicks = fromEvent(document, 'click');
    clicks.pipe(
      exhaustMap(() => interval(1000).pipe(take(4))),
    ).subscribe(x => console.log(x));
  }

}

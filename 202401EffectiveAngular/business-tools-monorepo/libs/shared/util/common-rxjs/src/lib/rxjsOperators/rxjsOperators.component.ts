import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {combineLatest, concat, distinctUntilChanged, filter, forkJoin, map, merge, of, Subject} from "rxjs";

@Component({
  selector: 'bt-libs-util-combine-latest',
  imports: [CommonModule],
  templateUrl: './rxjsOperators.component.html',
  styleUrl: './rxjsOperators.component.scss',
})
export class RxjsOperatorsComponent {

  display:string = '';

  display2:string = '';

  display3:string = '';

  constructor() {

    this.combineLatest1()

    this.combineLatest2()

    this.forkJoin1()

    this.concat1()

    this.merge1()

    this.pipeable1()
  }

  combineLatest1() {
    const amountExclVat = of(100);
    const vatPercentage = of(20);
    combineLatest([amountExclVat, vatPercentage]).subscribe({
      next: ([amount, percentage]) => {
        this.display = `Total: ${amount * (percentage / 100 + 1)}`;
        // console.log('Total:', amount * (percentage / 100 + 1));
      }
    });
  }

  combineLatest2(){
    const a = new Subject();
    const b = new Subject();
    combineLatest([a, b]).subscribe({
      next: ([a, b]) => {
        this.display2 = `data: ${a}, ${b}`;
        // console.log('data', a, b)
      }
    });
    a.next(1);
    setTimeout(() => { b.next(2) }, 5000);
    setTimeout(() => { a.next(10) }, 10000);
  }

  forkJoin1() {

    /**
     *  forkJoin only emits when all observables complete.
     * */


    const a = new Subject();
    const b = new Subject();
    const c = new Subject();
    const d = new Subject();

    forkJoin({ post1: a, post2: b, post3: c, post4: d }).subscribe({
      next: (value) => {
        this.display3 = `data: ${value.post1}, ${value.post2}, ${value.post3}, ${value.post4}`;
      }
    });

    setTimeout(() => { a.next('post1'); a.complete(); }, 5000);
    setTimeout(() => { b.next('post2'); b.complete(); }, 10000);
    setTimeout(() => { c.next('post3'); c.complete(); }, 15000);
    setTimeout(() => { d.next('post4'); d.complete(); }, 20000);
  }


  /**
   *
   * So, if you have two inner Observables, concat() will emit all the
   * values of the first inner Observable until that Observable is completed.
   * All the values that have been emitted by the second Observable before the
   * first Observable has been completed will not be emitted by concat().
   * When the first Observable has been completed, the concat() operator subscribes
   * to the second Observable and starts to emit the values emitted by the second Observable.
   * If you have even more inner Observables, this process will be repeated, and concat()
   * will subscribe to the next Observable when the previous Observable is completed:
   *
   * */

  concat1(){
    const a = new Subject();
    const b = new Subject();
    concat(a, b).subscribe(console.log);
    a.next(1);
    a.next(2);
    b.next(3);
    a.complete();
    b.next(4);
    b.complete();

    // Logs: 1, 2, 4
  }


  /**
   * merge: The merge() operator combines all inner Observables and emits the values as they come in.
   * The merge() operator doesn’t wait for all Observables to emit a value, nor does it care about the order.
   * When one of the Observables emits a value, the merge() operator will process it:
   * */
  merge1(){

    const a = new Subject();
    const b = new Subject();
    merge(a, b).subscribe(console.log);
    b.next('B:1');
    a.next('A:1');
    a.next('A:2');
    b.next('B:2');
// Logs: B:1, A:1, A:2, B:2

  }

  /**
   *
   * The first distinctUntilChanged() operator checks if the Observable value differs from the previous and filters it out
   * if the value is the same as the last emitted value. Next, the filter() operator works similarly to the filter function
   * on an array; in our case, we filter out all values that aren’t smaller than 5. Lastly, we use the map() operator;
   * this is also similar to the map function on an array and lets you map the value to a new value; in our case,
   * we multiply by a factor of 10. After applying all our operators, the Observable values that are logged in the subscription
   * are 10, 20, 30, and 40; all other values of our Observable are filtered out.
   *
   * */
  pipeable1(){

    const observable = of(1, 1, 2, 3, 4, 4, 5);
    observable.pipe(
      distinctUntilChanged(),
      filter(value => value < 5),
      map(value => value as number * 10)
    ).subscribe(results => {console.log('results:', results)});
      // Logs: 10, 20, 30, 40

  }





}

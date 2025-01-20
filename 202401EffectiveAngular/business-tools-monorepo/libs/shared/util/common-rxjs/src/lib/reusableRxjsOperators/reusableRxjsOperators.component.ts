import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {filter, map, of, pipe} from "rxjs";

@Component({
  selector: 'bt-libs-util-reusable-rxjs-operators',
  imports: [CommonModule],
  templateUrl: './reusableRxjsOperators.component.html',
  styleUrl: './reusableRxjsOperators.component.scss',
})
export class ReusableRxjsOperatorsComponent {

  constructor() {

    of(1, 2, 4, 5, 6, 7).pipe(this.discardOddDoubleEven()).subscribe(console.log);

  }

  doubleValues = () => pipe(
    map((v: number) => v* 2)
  )

  discardOdd = () => pipe(
    filter((v: number) => !(v % 2)),
  );

  discardOddDoubleEven = () => pipe(
    this.discardOdd(),
    this.doubleValues()
  )



}

import {Component, ElementRef, viewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RxjsOperatorsComponent} from "@bt-libs/shared/util/common-rxjs";

@Component({
  selector: 'bt-libs-util-signal-query',
  imports: [CommonModule, RxjsOperatorsComponent],
  templateUrl: './signalQuery.component.html',
  styleUrl: './signalQuery.component.scss',
})
export class SignalQueryComponent {

  /**
   *
   * In the preceding example, we used the viewChild() query Signal to retrieve the <div> element with the #el ID defined on
   * it and the <my-component> element. Alternatively, if you want to retrieve multiple elements with the same selector,
   * you can use the viewChildren() function.
   *
   * */

  divEl = viewChild<ElementRef>('el');
  cmp = viewChild(RxjsOperatorsComponent);

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective, IfFalseDirective} from "@bt-libs/shared/ui/common-directives";
import {interval, Observable} from "rxjs";
import {MultiplyPipe} from "@bt-libs/shared/util/common-pipes";
import {SelectableLabelComponent} from "@bt-libs/shared/ui/common-components";

@Component({
  selector: 'app-expenses-approval-page',
  imports: [CommonModule, HighlightDirective, IfFalseDirective, MultiplyPipe, SelectableLabelComponent],
  templateUrl: './expenses-approval-page.component.html',
  styleUrl: './expenses-approval-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesApprovalPageComponent {

  timer: Observable<number> = interval(2000);



}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightDirective} from "@bt-libs/shared/ui/common-directives";

@Component({
  selector: 'app-expenses-approval-page',
  imports: [CommonModule, HighlightDirective],
  templateUrl: './expenses-approval-page.component.html',
  styleUrl: './expenses-approval-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesApprovalPageComponent {}

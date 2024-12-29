import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenses-approval-page',
  imports: [CommonModule],
  templateUrl: './expenses-approval-page.component.html',
  styleUrl: './expenses-approval-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesApprovalPageComponent {}

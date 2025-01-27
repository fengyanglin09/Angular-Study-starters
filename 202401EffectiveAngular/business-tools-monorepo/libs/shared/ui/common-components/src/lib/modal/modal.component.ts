import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bt-libs-ui-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {

  @Input({ required: true }) title = '';
  @Input({ required: true }) shown: boolean = false;
  @Output() shownChange = new EventEmitter<boolean>();

}

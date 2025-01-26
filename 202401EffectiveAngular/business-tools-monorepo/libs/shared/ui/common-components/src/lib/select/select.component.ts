import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bt-libs-ui-select',
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {

  @Input({ required: true }) options!: unknown[];
  @Input() optionTemplate?: TemplateRef<unknown> | any;
  @Input() selectedIndex?: number;
  @Input() labelKey?: string;
  @Output() selectedChange = new EventEmitter<unknown>();
  onOptionChange(index: any) {
    this.selectedIndex = index.target.value;
    this.selectedChange.emit(this.options[index.target.value]);
  }

}

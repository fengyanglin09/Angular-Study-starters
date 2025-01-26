import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Widgets} from "./widgets.enum";
import {ClockWidgetComponent} from "../clockWidget/clockWidget.component";

@Component({
  selector: 'bt-libs-ui-defer-widget',
  imports: [CommonModule, ClockWidgetComponent],
  templateUrl: './defer-widget.component.html',
  styleUrl: './defer-widget.component.scss',
})
export class DeferWidgetComponent {

  @Input() activeWidget!: Widgets;
  @Input() activeData!: any;
  widgets = Widgets;


}

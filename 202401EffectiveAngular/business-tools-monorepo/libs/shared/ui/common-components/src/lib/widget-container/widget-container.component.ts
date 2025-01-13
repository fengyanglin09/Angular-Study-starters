import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {widget} from './widget-container-interface';

@Component({
  selector: 'bt-libs-ui-widget-container',
  imports: [CommonModule],
  templateUrl: './widget-container.component.html',
  styleUrl: './widget-container.component.scss',
})
export class WidgetContainerComponent{

  @Input() widget: widget = {component: null};

  widgetInputs = {
    'city2': 'Amsterdam2',
    'message2': 'Sunny2',
  }




}

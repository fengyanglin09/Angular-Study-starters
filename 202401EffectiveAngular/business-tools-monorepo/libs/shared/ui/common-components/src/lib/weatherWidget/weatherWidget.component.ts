import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WEATHERWIDGET} from "../widget-container/widget-tokens";

@Component({
  selector: 'bt-libs-ui-weather-widget',
  imports: [CommonModule],
  templateUrl: './weatherWidget.component.html',
  styleUrl: './weatherWidget.component.scss',
})
export class WeatherWidgetComponent {

  widgetData = inject(WEATHERWIDGET);

  @Input() city2?: string;
  @Input() message2?: string;

}

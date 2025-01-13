import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Injector,
  Input,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WidgetOption} from "./widget-loaders";
import {widget} from "@bt-libs/shared/ui/common-components";

@Component({
  selector: 'bt-libs-ui-widget-lazy-container',
  imports: [CommonModule],
  templateUrl: './widget-lazy-container.component.html',
  styleUrl: './widget-lazy-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetLazyContainerComponent {

  // for lazy loading

  protected readonly cd = inject(ChangeDetectorRef);
  @Input() injector!: Injector | null;
  @Input({ required: true }) widgetLoader!: WidgetOption;
  widget: widget = { component: null, injector: null };

  async ngOnChanges(changes: SimpleChanges): Promise<any> {

    const widgetLoader: WidgetOption = changes['widgetLoader'].currentValue;

    const widget: any = await widgetLoader();

    this.widget = { component: widget[Object.keys(widget)[0]], injector: this.injector };

    // this.widget = { component: widget, injector: this.injector };

    this.cd.detectChanges();

  }

}

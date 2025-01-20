import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Injector, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AddExpenseComponent,
  AddExpenseReactiveComponent, DynamicControl,
  DynamicFormComponent
} from "@bt-libs/finance/ui/expenses-registration-forms";
import {Validators} from "@angular/forms";
import {
  ClockWidgetComponent, DeferWidgetComponent,
  DifferentNgTemplateComponent,
  DisplayScalesComponent,
  ModalComponent,
  MultiOpenModelComponent,
  SelectComponent,
  WEATHERWIDGET,
  WeatherWidgetComponent,
  widget,
  WidgetContainerComponent, WidgetLazyContainerComponent, widgetLoaders, WidgetOption, Widgets
} from "@bt-libs/shared/ui/common-components";
import {ScalesHeaderProjectionDirective, ScalesProjectionDirective} from "@bt-libs/shared/ui/common-directives";
import {
  ComputedSignalsComponent,
  FlattenOperatorsComponent, RegularSignalsComponent,
  ReusableRxjsOperatorsComponent,
  RxjsOperatorsComponent
} from "@bt-libs/shared/util/common-rxjs";


@Component({
  selector: 'app-expenses-overview-page',
  imports: [CommonModule, AddExpenseComponent, AddExpenseReactiveComponent, DynamicFormComponent, ModalComponent, DisplayScalesComponent, ScalesProjectionDirective, ScalesHeaderProjectionDirective, DifferentNgTemplateComponent, MultiOpenModelComponent, SelectComponent, WidgetContainerComponent, WidgetLazyContainerComponent, DeferWidgetComponent, RxjsOperatorsComponent, FlattenOperatorsComponent, ReusableRxjsOperatorsComponent, RegularSignalsComponent, ComputedSignalsComponent],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesOverviewPageComponent implements OnInit {

  // addExpenseShown = true;
  //
  // formModelConfig: DynamicControl[] = [
  //   {
  //     controlKey: 'description', formFieldType: 'input',
  //     inputType: 'text', label: 'Description',
  //     defaultValue: '', updateOn: 'change',
  //     validators: [Validators.required]
  //   },
  //   {
  //     controlKey: 'amount', formFieldType: 'input',
  //     inputType: 'number', label: 'Amount excl. VAT',
  //     defaultValue: null, updateOn: 'change',
  //     validators: [Validators.required]
  //   }
  // ]
  //
  //
  // onOptionChange($event: any) {
  //   // console.log($event);
  // }
  //
  //
  // activeWidget!: widget;
  //
  // protected readonly cd = inject(ChangeDetectorRef);
  // showWeather = true;
  //
  // ngOnInit(): void {
  //
  //   // setInterval(() => {
  //   //   this.activeWidget = { component: this.showWeather ? WeatherWidgetComponent : ClockWidgetComponent };
  //   //   this.showWeather = !this.showWeather;
  //   //   this.cd.detectChanges();
  //   // }, 5000)
  //
  //   this.activeWidget = { component: WeatherWidgetComponent, injector: Injector.create({ providers: [{ provide: WEATHERWIDGET, useValue: { city: 'Amsterdam', message: 'Sunny' } }] }) }
  //
  //   this.cd.detectChanges()
  //
  // }

  // widget: WidgetOption = widgetLoaders.weatherWidget;
  // injector: Injector | null = Injector.create({ providers: [{ provide: WEATHERWIDGET, useValue: { city: 'Amsterdam_lazy', message: 'Sunny_lazy' } }] });
  protected readonly cd = inject(ChangeDetectorRef);
  // ngOnInit() {
  //   setInterval(() => {
  //     this.widget = this.widget === widgetLoaders.clockWidget ? widgetLoaders.weatherWidget : widgetLoaders.clockWidget;
  //     this.injector = this.widget === widgetLoaders.clockWidget ? null : Injector.create({ providers: [{ provide: WEATHERWIDGET, useValue: { city: 'Amsterdam', message: 'Sunny' } }] });
  //     this.cd.detectChanges();
  //   }, 5000)
  // }


  widget!: Widgets;
  widgetData: any = null;

  ngOnInit() {
    setInterval(() => {
      this.widget = this.widget === Widgets.Clock ? Widgets.Weather : Widgets.Clock;
      this.widgetData = this.widget === Widgets.Clock ? null : { city: 'Amsterdam', message: 'Sunny' };
      this.cd.detectChanges();
    }, 5000)
  }


}

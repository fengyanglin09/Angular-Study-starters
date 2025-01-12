import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Injector, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AddExpenseComponent,
  AddExpenseReactiveComponent, DynamicControl,
  DynamicFormComponent
} from "@bt-libs/finance/ui/expenses-registration-forms";
import {Validators} from "@angular/forms";
import {
  ClockWidgetComponent,
  DifferentNgTemplateComponent,
  DisplayScalesComponent,
  ModalComponent,
  MultiOpenModelComponent,
  SelectComponent,
  WEATHERWIDGET,
  WeatherWidgetComponent,
  widget,
  WidgetContainerComponent
} from "@bt-libs/shared/ui/common-components";
import {ScalesHeaderProjectionDirective, ScalesProjectionDirective} from "@bt-libs/shared/ui/common-directives";


@Component({
  selector: 'app-expenses-overview-page',
  imports: [CommonModule, AddExpenseComponent, AddExpenseReactiveComponent, DynamicFormComponent, ModalComponent, DisplayScalesComponent, ScalesProjectionDirective, ScalesHeaderProjectionDirective, DifferentNgTemplateComponent, MultiOpenModelComponent, SelectComponent, WidgetContainerComponent],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExpensesOverviewPageComponent implements OnInit {

  addExpenseShown = true;

  formModelConfig: DynamicControl[] = [
    {
      controlKey: 'description', formFieldType: 'input',
      inputType: 'text', label: 'Description',
      defaultValue: '', updateOn: 'change',
      validators: [Validators.required]
    },
    {
      controlKey: 'amount', formFieldType: 'input',
      inputType: 'number', label: 'Amount excl. VAT',
      defaultValue: null, updateOn: 'change',
      validators: [Validators.required]
    }
  ]


  onOptionChange($event: any) {
    // console.log($event);
  }


  activeWidget!: widget;

  protected readonly cd = inject(ChangeDetectorRef);
  showWeather = true;

  ngOnInit(): void {

    // setInterval(() => {
    //   this.activeWidget = { component: this.showWeather ? WeatherWidgetComponent : ClockWidgetComponent };
    //   this.showWeather = !this.showWeather;
    //   this.cd.detectChanges();
    // }, 5000)

    this.activeWidget = { component: WeatherWidgetComponent, injector: Injector.create({ providers: [{ provide: WEATHERWIDGET, useValue: { city: 'Amsterdam', message: 'Sunny' } }] }) }

    this.cd.detectChanges()

  }



}

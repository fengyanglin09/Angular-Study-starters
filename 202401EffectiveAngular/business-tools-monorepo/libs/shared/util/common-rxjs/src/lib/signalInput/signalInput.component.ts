import {Component, input, Input, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {transform} from "@swc/core";

@Component({
  selector: 'bt-libs-util-signal-input',
  imports: [CommonModule],
  templateUrl: './signalInput.component.html',
  styleUrl: './signalInput.component.scss',
})
export class SignalInputComponent implements OnInit, OnDestroy{


  sort<T>(data: T[]): T[] {
    return data.sort((a, b) => Number(a) - Number(b))
  }

  @Input() data!: string; // The old way of doing things

  data1 = input<string>(); // The signal input


  data2 = input.required<string>(); //the signal input that is required

  data3 = input({ values: [], id: 1 }, { alias: 'product'}); // The signal input with an alias, and default values

  data4 = input(['1','2','3'], {transform: this.sort<string>}); // The signal input with a transform function



  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}

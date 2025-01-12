import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bt-libs-ui-different-ng-template',
  imports: [CommonModule],
  templateUrl: './differentNgTemplate.component.html',
  styleUrl: './differentNgTemplate.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DifferentNgTemplateComponent implements AfterViewInit{


  @ViewChild('A') templateA!: TemplateRef<unknown>;
  @ViewChild('CD') templateCD!: TemplateRef<unknown>;
  aboveB!: TemplateRef<unknown>;
  belowB!: TemplateRef<unknown>;

  isMobile: boolean = false;

  constructor(private change: ChangeDetectorRef) {
  }

  changeIsMobile() {
    this.isMobile = !this.isMobile;
    this.ngAfterViewInit();
  }

  ngAfterViewInit(): void {

    this.aboveB = this.isMobile ? this.templateA : this.templateCD;
    this.belowB = this.isMobile ? this.templateCD : this.templateA;

    this.change.detectChanges();

  }
}

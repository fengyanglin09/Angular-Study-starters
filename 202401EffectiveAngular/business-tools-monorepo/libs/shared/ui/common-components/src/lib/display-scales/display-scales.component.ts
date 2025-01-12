import {Component, ContentChild, ContentChildren, Input, QueryList} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ScalesHeaderProjectionDirective,
  ScalesProjectionDirective
} from "@bt-libs/shared/ui/common-directives";

@Component({
  selector: 'bt-libs-ui-display-scales',
  imports: [CommonModule],
  templateUrl: './display-scales.component.html',
  styleUrl: './display-scales.component.scss',
})
export class DisplayScalesComponent {

  @Input({ required: true }) scaleSizes!: number[];

  @ContentChild(ScalesProjectionDirective) contentChild!: ScalesProjectionDirective;

  // @ContentChildren(ScalesProjectionDirective) content!: QueryList<ScalesProjectionDirective>;


  @ContentChild(ScalesHeaderProjectionDirective) headerContent!: ScalesHeaderProjectionDirective;


}

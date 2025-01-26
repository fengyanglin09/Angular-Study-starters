import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[btLibsUiScalesHeaderProjection]',
})
export class ScalesHeaderProjectionDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

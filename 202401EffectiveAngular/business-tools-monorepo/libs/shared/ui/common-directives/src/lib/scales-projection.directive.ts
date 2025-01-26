import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[btLibsUiScalesProjection]',
})
export class ScalesProjectionDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

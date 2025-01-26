import {Directive, inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[btLibsUiIfFalse]',
})
export class IfFalseDirective {

  private templateRef = inject(TemplateRef);

  private viewContainer = inject(ViewContainerRef);

  private embeddedTemplateAdded = false;

  @Input() set btLibsUiIfFalse(condition: boolean) {
    if (!condition && !this.embeddedTemplateAdded) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.embeddedTemplateAdded = true;
    } else if (condition && this.embeddedTemplateAdded) {
      this.viewContainer.clear();
      this.embeddedTemplateAdded = false;
    }
  }

  constructor() {}
}

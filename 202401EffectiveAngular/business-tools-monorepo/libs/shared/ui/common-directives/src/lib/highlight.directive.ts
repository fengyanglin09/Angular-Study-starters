import {Directive, ElementRef, HostBinding, HostListener, inject, Input, OnInit} from '@angular/core';

/**
 *
 * You can also make selectors that apply directives to HTML elements with a specific ID, data attribute, or CSS class applied to the HTML element. Here is an example for all three of these options:
 *
 *
 * selector: '#someId, .someCssClass, [data-highlight="true"]'
 *
 * */

/**
 * @note1 - all span elements will have the highlight directive applied unless you add noHighlight to a span element
 * @note2 - you can add the btLibsUiHighlight directive to all elements but the label element. When you try to add the directive to a label element, the compiler will throw up an error
 *
 * */
@Directive({
  selector: 'span:not([noHighlight]), [btLibsUiHighlight]:not(label)',
})
export class HighlightDirective implements OnInit{

  @HostBinding('style.fontWeight') get fontWeight(){return 'bold'};


  //for input(), make sure a default value is provided

  @Input('btLibsUiHighlight') background: string = 'yellow';

  @Input() mouseoverColor = 'red';

  @Input() textColor = 'blue';

  private originalColor = 'black';

  private originalBackground = 'white';

  private el = inject(ElementRef).nativeElement;

  constructor() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.originalColor = this.el.style.color;
    this.originalBackground = this.el.style.backgroundColor;
    this.el.style.backgroundColor = this.mouseoverColor;
    this.el.style.color = this.textColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.style.backgroundColor = this.originalBackground;
    this.el.style.color = this.originalColor;
  }

  ngOnInit(): void {
    // this.el.style.backgroundColor = this.background;
    // this.el.style.color = this.textColor;
  }
}

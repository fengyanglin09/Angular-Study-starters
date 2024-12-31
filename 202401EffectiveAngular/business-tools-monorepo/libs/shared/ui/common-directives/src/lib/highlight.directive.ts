import {Directive, ElementRef, HostBinding, HostListener, inject, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[btLibsUiHighlight]',
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

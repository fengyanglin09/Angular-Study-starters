import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {animate, group, keyframes, sequence, state, style, transition, trigger} from "@angular/animations";
import {selectedAnimation} from "./animations";

@Component({
  selector: 'bt-libs-ui-selectable-label',
  imports: [CommonModule],
  templateUrl: './selectable-label.component.html',
  styleUrl: './selectable-label.component.scss',
  animations:[selectedAnimation()],
    // animate('2s', keyframes([
    //   style({ backgroundColor: 'blue', offset: 0}),
    //   style({ backgroundColor: 'red', offset: 0.8}),
    //   style({ backgroundColor: '#754600', offset: 1.0})])),
    // sequence([
    //   animate('2s', style({ backgroundColor: '#382632' })),
    //   animate('2s', style({ color: 'orange' }))
    // ]),
    // group([
    //   animate('2s', style({ color: 'white' })),
    //   animate('2s', style({ backgroundColor: '#455b66' })),
    // ]),
    // group([
    //   animate('2s', style({ fontSize: '24px' })),
    //   animate('2s', style({ opacity: '0.5' })),
    // ])

})
export class SelectableLabelComponent {

  @Input() labelText!: String;

  @Input() get selected(){
    return this._selected;
  }

  set selected(selected){
    this._selected = selected;
    this.animationState = selected ? 'selected' : 'deselected';
  }

  private _selected = false;

  animationState = 'deselected';

  @Output() selectedChange = new EventEmitter<boolean>();

  animationMsg: string = '';

  onSelectionChanged(){
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }


  onAnimationEvent($event: any) {
    this.animationMsg = $event.phaseName;
  }
}

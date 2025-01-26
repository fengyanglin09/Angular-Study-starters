import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from "@angular/animations";

export function selectedAnimation(): AnimationTriggerMetadata {
  return trigger('selectedState', [
    state('selected', style({ backgroundColor: 'blue' })),
  state('deselected', style({ backgroundColor: 'red' })),
  transition('selected <=> deselected',[animate( '2s' )]),])
}

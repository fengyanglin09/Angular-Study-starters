import {Component, effect, EffectRef, inject, Injector, OnDestroy, OnInit, signal, untracked} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'bt-libs-util-signal-effects',
  imports: [CommonModule],
  templateUrl: './signalEffects.component.html',
  styleUrl: './signalEffects.component.scss',
})
export class SignalEffectsComponent implements OnInit, OnDestroy {

  count = signal(0);

  showCount = signal(true);

  private countEffect: EffectRef;

  private canUpdateEffect: EffectRef;

  constructor() {

  }

  ngOnInit(): void {
    // this effect will run if showCount is true, and there is a new value from count signal
    effect(() => {
      if(this.showCount){
        console.log('count:', this.count());
      }
    });

    /**
     * you can also prevent the Signal’s effect function from reacting to a Signal by wrapping that Signal
     * in the untracked function:
     * */
    effect(() => {
      console.log('trackShowCount:', this.showCount);
      console.log('unTrackCount:', untracked(this.count));
    });


    /**
     *
     * By default, effects clean up when the injection context where the effect is declared is destroyed.
     * If you don’t want this to happen and you need manual control over the destruction of the signal effect,
     * you can configure the effect so that it uses manual cleanup
     *
     * */

    this.countEffect = effect(() => {
      console.log('Updated count:', this.count());
    }, { manualCleanup: true });


    /**
     * To manually destroy the effect, you can call the destroy() method on the effect reference:
     * */

    this.countEffect.destroy();

    /**
     * You can also hook into the cleanup of a Signal effect by using a callback function.
     * This can be useful when you want to perform some logic when the Signal effect is cleaned up
     * */

    effect((onCleanup) => {
      onCleanup(() => { console.log('Cleanup logic')})
    })


    /**
     * By default, you are not allowed to update Signals inside a Signal effect; this is because this can
     * easily result in infinite executions of the Signal effect. However, you can circumvent this by setting the
     * allowSignalWrites property on the Signal effect:
     * todo - this is not recommended
     * */
    this.canUpdateEffect = effect(() => {
      console.log('Updated expenses:', this.count());
    }, { allowSignalWrites: true });

  }

  ngOnDestroy(): void {

    this.countEffect.destroy();

  }



}

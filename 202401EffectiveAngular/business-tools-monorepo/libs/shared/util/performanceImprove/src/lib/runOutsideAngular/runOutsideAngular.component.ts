import {Component, inject, NgZone} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bt-libs-util-run-outside-angular',
  imports: [CommonModule],
  templateUrl: './runOutsideAngular.component.html',
  styleUrl: './runOutsideAngular.component.scss',
})
export class RunOutsideAngularComponent {

  protected readonly ngZone = inject(NgZone);
  performTask(): void {
    this.ngZone.runOutsideAngular(() => {
      console.log('Task performed outside Angular Zone, running heavy task, because this wont be run by Angular Change Detection');
      // Run inside the runOutsideAngular method again
      this.ngZone.run(() => {
        console.log('Running inside NgZone again');
      });
    });
  }

}

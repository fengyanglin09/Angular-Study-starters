import {Component, TrackByFunction} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bt-libs-util-track-by',
  imports: [CommonModule],
  templateUrl: './TrackBy.component.html',
  styleUrl: './TrackBy.component.scss',
})
export class TrackByComponent {

  items = [{id: 1, name: 'item 1'}, {id: 2, name: 'item 2'}, {id: 3, name: 'item 3'}];

  trackById(index: number, item: {id: number, name: string}) { return item.id }

}

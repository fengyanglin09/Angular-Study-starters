import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'bt-libs-util-ng-optimized-image',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './NgOptimizedImage.component.html',
  styleUrl: './NgOptimizedImage.component.scss',
})
export class NgOptimizedImageComponent {}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
})
export class MultiplyPipe implements PipeTransform {
  transform(value: number | null, multiplier: number = 2, addition: number = 0): unknown {

    if (value === null) {
      return 0;
    }

    return (value * multiplier) + addition;
  }
}

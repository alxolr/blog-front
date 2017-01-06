import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {
  transform(text: string, length) {
    return text.substring(1, length) + '...';
  }
}

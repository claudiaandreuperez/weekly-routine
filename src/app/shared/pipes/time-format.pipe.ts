import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeFormat', standalone: true })
export class TimeFormatPipe implements PipeTransform {
  transform(time: string | undefined): string {
    if (!time) return '';
    const [h, m] = time.split(':');
    return `${h}:${m}`;
  }
}

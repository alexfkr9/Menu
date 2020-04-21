import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imageFilter' })

export class ImageFilter implements PipeTransform {
  transform(items: any[], criteria: string): any {
    if (criteria === 'all') {
      return items;
    } else {
      return items.filter(item => item.category === criteria);
    }
  }
}

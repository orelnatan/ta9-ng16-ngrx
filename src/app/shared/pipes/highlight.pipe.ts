import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, highlighted: string): string { 
    return value.replace(new RegExp(highlighted, "gi"), (match: string): string => {
      return `<mark>${match}</mark>`; 
    });
  }
}


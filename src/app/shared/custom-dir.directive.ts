import { Directive, PipeTransform } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
  standalone: true
})
export class CustomDirDirective implements PipeTransform {

  transform(value: number): string {
    if(value < 10) return "weak";
    else if(value < 20) return "medium";
    else return "strong";
  }

}

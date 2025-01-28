import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'formatEnUS'
})
export class CustomNumberPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}

  transform(value: number): string | null {
    // Usa el DecimalPipe para formatear en 'en-US'
    return this.decimalPipe.transform(value, '1.2-2', 'en-US');
  }
}
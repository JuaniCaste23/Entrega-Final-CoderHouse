import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase',
})

export class upperCase implements PipeTransform {
  transform(alumno: string){
    return alumno.toUpperCase();
  }
}

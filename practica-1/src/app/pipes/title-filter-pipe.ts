import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'titleFilter',
})
export class TitleFilterPipe implements PipeTransform {

  transform(eventos : IEvent[], title: string): IEvent[] {
    //primer parámetro, los datos que se quieren transformar
    //segundo parámetro, el valor que se pasa al pipe desde la plantilla
      const filter = title ? title.toLocaleLowerCase() : null;

      if(!eventos || !title) return eventos;
      return filter ? eventos.filter((event) => event.title.toLocaleLowerCase().includes(filter)) : eventos;
  }

}

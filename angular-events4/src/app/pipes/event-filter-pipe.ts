import { Pipe, PipeTransform } from '@angular/core';
import { IEvents } from '../interfaces/i-events';

@Pipe({
  name: 'eventFilter',
})
export class EventFilterPipe implements PipeTransform {

  transform(events: IEvents[], title : string) {
    const filter = title ? title.toLocaleLowerCase() : null;
    return filter ? events.filter((eve) => 
      eve.title.toLocaleLowerCase().includes(filter) || eve.description.toLocaleLowerCase().includes(filter)) 
      : events;
  }
}

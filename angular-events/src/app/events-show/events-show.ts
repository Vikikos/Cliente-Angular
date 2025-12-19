import { Component } from '@angular/core';
import { IEvents } from '../interfaces/i-events';

@Component({
  selector: 'app-events-show',
  imports: [],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  events: IEvents[] = [
    {
      title: 'Evento 1',
      image: 'imagen',
      date: '2025/12/20',
      description: 'texto kdhvkjdfvbh',
      price: 20
    },
    {
      title: 'Evento 2',
      image: 'imagen2',
      date: '2025/12/22',
      description: 'texto kdhfbd,nfj,bnfjkjdfvbh',
      price: 10
    }
  ]
}

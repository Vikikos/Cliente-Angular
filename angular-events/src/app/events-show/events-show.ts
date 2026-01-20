import { Component } from '@angular/core';//por defecto

import { IEvents } from '../interfaces/i-events';//la interfaz


@Component({
  selector: 'app-events-show',
  imports: [],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  search = '';
  events: IEvents[] = [
    {
      title: 'evento discoteca',
      image: 'imagen',
      date: '2025/12/20',
      description: 'texto kdhvkjdfvbh',
      price: 20
    },
    {
      title: 'Evento boda',
      image: 'imagen 2',
      date: '2025/12/22',
      description: 'texto kdhfbd,nfj,bnfjkjdfvbh',
      price: 10
    }
  ]
}

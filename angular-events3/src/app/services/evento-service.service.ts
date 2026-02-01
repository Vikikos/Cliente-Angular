import { Injectable } from '@angular/core';
import { IEvents } from '../interfaces/i-events';//la interfaz

@Injectable({
  providedIn: 'root',
})
export class EventoServiceService {
  getEventos() : IEvents[] {
    //devolvemos el array de los eventos
    return [
      {
        title: 'evento discoteca',
        image: 'discoteca.avif',
        date: '2025/12/20',
        description: 'texto kdhvkjdfvbh',
        price: 20
      },
      {
        title: 'Evento boda',
        image: 'boda.jpg',
        date: '2025/12/22',
        description: 'texto kdhfbd,nfj,bnfjkjdfvbh',
        price: 10
      },
      {
        title: 'Evento Festival',
        image: 'festival.jpg',
        date: '2025/12/02',
        description: 'texto 3',
        price: 25
      }
    ]
  }
}

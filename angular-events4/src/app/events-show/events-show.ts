import { Component } from '@angular/core';//por defecto

import { IEvents } from '../interfaces/i-events';//la interfaz
import { CommonModule } from '@angular/common'; //para los pipes
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from "../pipes/event-filter-pipe";
import { EventoItem } from "../evento-item/evento-item";
import { EventoAdd } from "../evento-add/evento-add";
import { EventoServiceService } from "../services/evento-service.service";


@Component({
  selector: 'app-events-show',
  imports: [CommonModule, 
    FormsModule, 
    EventFilterPipe, 
    EventoItem, 
    EventoAdd
  ],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  search = '';
  //inicializamos el array vacio
  events: IEvents[] = [];
  //indicamos el tipo de parametro como EventoServiceService y angular pasa automaticvo el objeto del servicio al llamar al constructor
  constructor(private eventService: EventoServiceService) {}
  ngOnInit() {
    //llamamos al metodo del servicio que decuelve los eventos
    this.events = this.eventService.getEventos();
  }

  orderDate() {
    this.search='';

    this.events = this.events.sort(function (a,b) {
      if(a.date > b.date) return 1;
      else if(a.date < b.date) return -1;
      else return 0;
    });
  }

  orderPrice(){
    this.search='';

    this.events = this.events.sort(function (a,b) {
      if(a.price > b.price) return 1;
      else if(a.price < b.price) return -1;
      else return 0;
    });
  }

  deletEventArray(eve: IEvents) {
    //this.events.splice(this.events.indexOf(eve), 1);
    this.events = this.events.filter((e) => e.title != eve.title);
  }
  addEvent(newEvent : IEvents) {
    this.events = [...this.events,newEvent];
  }
}

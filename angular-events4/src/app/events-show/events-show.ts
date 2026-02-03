import { Component } from '@angular/core';//por defecto

import { IEvents } from '../interfaces/i-events';//la interfaz
import { CommonModule } from '@angular/common'; //para los pipes
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from "../pipes/event-filter-pipe";
import { EventoItem } from "../evento-item/evento-item";
import { EventoAdd } from "../evento-add/evento-add";
import { EventoServiceService } from "../services/evento-service.service";
import { Observable } from 'rxjs';


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
  eventos$: Observable<IEvents[]>;
  //indicamos el tipo de parametro como EventoServiceService y angular pasa automaticvo el objeto del servicio al llamar al constructor
  constructor(private eventService: EventoServiceService) {
    this.eventos$ = this.eventService.getEvents();
  }
  ngOnInit() {
    //llamamos al metodo del servicio que decuelve los eventos
    //this.events = this.eventService.getEvents();
  }

  orderDate() {
    this.search='';
    /*
    this.eventos$ = this.eventos$.sort(function (a,b) {
      if(a.date > b.date) return 1;
      else if(a.date < b.date) return -1;
      else return 0;
    });
    */
  }

  orderPrice(){
    this.search='';

    /*
    this.eventos$ = this.eventos$.sort(function (a,b) {
      if(a.price > b.price) return 1;
      else if(a.price < b.price) return -1;
      else return 0;
    });
    */
  }

  deletEventArray(even: IEvents) {
    //this.events.splice(this.events.indexOf(eve), 1);
    //this.eventos$ = this.eventos$.filter((e) => e.title != eve.title);
  }
  addEvent(newEvent : IEvents) {
    this.eventService
    .addEvent(newEvent)
    .subscribe();

    //actualizamos el observable de eventos
    this.eventos$ = this.eventService.getEvents();
    //otra manera  probar
    //.suscribe(() => this.eventos$ = [...this.eventos$,newEvent])
  }
    
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvents } from '../interfaces/i-events';//la interfaz
import { FormsModule } from '@angular/forms';
import { EventoServiceService } from "../services/evento-service.service";

@Component({
  selector: 'evento-add',
  imports: [FormsModule],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {
  @Input() events!: IEvents;
  newEvent: IEvents = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: ''
    };
  //@Output() eventAdded = new EventEmitter<IEvents>;

    //indicamos el tipo de parametro como EventoServiceService y angular pasa automaticvo el objeto del servicio al llamar al constructor
    constructor(private eventService: EventoServiceService) {}
    addEvent() {
      this.eventService
      .addEvent(this.newEvent)
      .subscribe();

      //this.eventAdded.emit(this.newEvent);
      this.newEvent = {
        title: '',
        description: '',
        image: '',
        price: 0,
        date: ''
      };
      
    }
  
    changeImage(fileInput: HTMLInputElement) {
      if (!fileInput.files || fileInput.files.length === 0) { return; }
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(fileInput.files[0]);
      reader.addEventListener('loadend', e => {
        this.newEvent.image = reader.result as string;
      });
    }
}

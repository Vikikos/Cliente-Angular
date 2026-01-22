import { Component } from '@angular/core';//por defecto

import { IEvents } from '../interfaces/i-events';//la interfaz
import { CommonModule } from '@angular/common'; //para los pipes
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from "../pipes/event-filter-pipe";//para ngModel


@Component({
  selector: 'app-events-show',
  imports: [CommonModule, FormsModule, EventFilterPipe],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  search = '';
  events: IEvents[] = [
    {
      title: 'evento discoteca',
      image: '/discoteca.avif',
      date: '2025/12/20',
      description: 'texto kdhvkjdfvbh',
      price: 20
    },
    {
      title: 'Evento boda',
      image: '/boda.jpg',
      date: '2025/12/22',
      description: 'texto kdhfbd,nfj,bnfjkjdfvbh',
      price: 10
    },
    {
      title: 'Evento Festival',
      image: '/boda.jpg',
      date: '2025/12/02',
      description: 'texto kdhfbd,nfj,bnfjkjdfvbh',
      price: 25
    }
  ]

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

  newEvent: IEvents = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };

  addEvent() {
    this.events.push(this.newEvent);
    // this.newEvent = {
    //   title: '',
    //   description: '',
    //   image: '',
    //   price: 0,
    //   date: ''
    // };
  }

  // changeImage(fileImage : any) {
  //   console.log(fileImage.value)
  //   this.newEvent.image = fileImage.value;
  // }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvent.image = reader.result as string;
    });
  }
}

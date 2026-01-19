import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { TitleFilterPipe } from "../pipes/title-filter-pipe";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'event-list',
  imports: [TitleFilterPipe,FormsModule],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  searchText='';
  eventos: IEvent[] = [
    {
      title: 'Evento 1',
      description: 'jsdghshgvhgbsd'
    },
    {
      title: 'Evento 2',
      description: 'jsdghshgvhgbsd'
    },
    {
      title: 'Evento 3',
      description: 'jsdghshgvhgbsd'
    },
    {
      title: 'Evento 4',
      description: 'jsdghshgvhgbsd'
    }
  ];
}

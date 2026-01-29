import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvents } from '../interfaces/i-events';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'evento-item',
  imports: [CommonModule,FormsModule],
  templateUrl: './evento-item.html',
  styleUrl: './evento-item.css',
})
export class EventoItem {
  @Input() event!: IEvents;

  @Output() deletEvent = new EventEmitter<void>();
  deleteEvento() {
      this.deletEvent.emit();
  }
}

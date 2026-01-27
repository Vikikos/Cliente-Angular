import { Component, Input, Output } from '@angular/core';
import { IncidentState } from '../incident-state/incident-state';
import { EventEmitter } from 'stream';

@Component({
  selector: '[incident-item]',
  imports: [IncidentState],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {
    @Input() incident!: any;
    auxEstado!: string;

    @Output() estadoCambiado = new EventEmitter<String>();
    cambiarEstado(){
        this.auxEstado!: String = "resuelta";
        this.estadoCambiado.emit(this.auxEstado);
    }
}

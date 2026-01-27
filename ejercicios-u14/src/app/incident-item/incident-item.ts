import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: '[incident-item]',
  imports: [],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {
    @Input() incident!: any;
    auxEstado!: string;

    @Output() estadoCambiado = new EventEmitter<string>();
    cambiarEstado(){
        this.auxEstado = "resuelta";
        this.estadoCambiado.emit(this.auxEstado);
    }
}

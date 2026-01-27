import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '[incident-state]',
  imports: [],
  templateUrl: './incident-state.html',
  styleUrl: './incident-state.css',
})
export class IncidentState {
    @Input() state!: string;
    auxState !: string;

    @Output() estadoCambio = new EventEmitter();

    cambiarEstado() {
        this.auxState = 'visto';
        this.estadoCambio.emit(this.auxState);
    }
}

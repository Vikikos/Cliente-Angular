import { Component } from '@angular/core';
import { IncidentItem } from '../incident-item/incident-item';

@Component({
  selector: 'incident-list',
  imports: [IncidentItem],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css',
})
export class IncidentList {
    incidents = [
        {
        'type': 'Error',
        'desc': 'No se puede acceder',
        'state': 'Solucionada'
        },
        {
        'type': 'Error',
        'desc': 'No se puede acceder',
        'state': 'Pendiente'
        },
        {
        'type': 'Aviso',
        'desc': 'Nuevo inicio de sesion',
        'state': 'Pendiente'
        },
        {
        'type': 'Error',
        'desc': 'No se puede acceder',
        'state': 'Vista'
        },
    ]
    actualizarEstado(index: any, state: string) {
        this.incidents[index].state = state;
    }
}

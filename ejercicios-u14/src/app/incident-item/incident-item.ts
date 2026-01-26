import { Component } from '@angular/core';

@Component({
  selector: '[incident-item]',
  imports: [],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {
    incident = {
      'type': 'Error',
      'desc': 'No se puede acceder',
      'state': 'Pendiente'
    }
}

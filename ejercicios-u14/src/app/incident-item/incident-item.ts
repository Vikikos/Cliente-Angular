import { Component, Input } from '@angular/core';

@Component({
  selector: '[incident-item]',
  imports: [],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {
    @Input() incident!: any;
}

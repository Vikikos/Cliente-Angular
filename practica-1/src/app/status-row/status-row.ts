import { Component } from '@angular/core';
import { NgClass} from '@angular/common';

@Component({
    selector: 'status-row',
    imports: [NgClass],
    templateUrl: './status-row.html',
    styleUrl: './status-row.css',
})
export class StatusRow {
    active = true;
    enabled =  false;

    isFirst = false;
    islast = true;

    rowClases = {
        'first' : this.isFirst,
        'last bold' : this.islast
    }
}

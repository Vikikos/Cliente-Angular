import { Component } from '@angular/core';

@Component({
    selector: 'button-hover',
    imports: [],
    templateUrl: './button-hover.html',
    styleUrl: './button-hover.css',
})
export class ButtonHover {
    
    ratonEncima() {
        console.log('Ratón sobre el botón');
    }

    count = 0;
    incremtCont() {
        this.count++;
    }
}

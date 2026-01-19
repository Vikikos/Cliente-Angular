import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
//comonmodule para todos los pipes

@Component({
  selector: 'price-view',
  imports: [CurrencyPipe,DatePipe,CommonModule],
  templateUrl: './price-view.html',
  styleUrl: './price-view.css',
})
export class PriceView {
    price = 49.99;
    today = new Date();
}

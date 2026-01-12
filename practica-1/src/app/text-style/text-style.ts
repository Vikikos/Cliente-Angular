import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'text-style',
  imports: [NgStyle],
  templateUrl: './text-style.html',
  styleUrl: './text-style.css',
})
export class TextStyle {
  //ej 3
  fontSize = 20;
  isError = true;
  //ej 4
  selected = false;
  cardStyles = {
    'border-color' : this.selected ? 'blue' : 'gray'
  };
}

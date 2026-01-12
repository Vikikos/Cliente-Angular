import { Component, signal } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { UserProfile } from "./user-profile/user-profile";
import { TextStyle } from "./text-style/text-style";
import { StatusRow } from "./status-row/status-row";

@Component({
  selector: 'app-root',
  imports: [ProductList,UserProfile,TextStyle,StatusRow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-1');
}

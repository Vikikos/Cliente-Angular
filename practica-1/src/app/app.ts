import { Component, signal } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { UserProfile } from "./user-profile/user-profile";
import { TextStyle } from "./text-style/text-style";
import { StatusRow } from "./status-row/status-row";
import { ButtonHover } from "./button-hover/button-hover";
import { SearchBox } from "./search-box/search-box";
import { PriceView } from './price-view/price-view';
import { EventList } from './event-list/event-list';
import { LifecycleTest } from './lifecycle-test/lifecycle-test';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ProductList,UserProfile,TextStyle,
    StatusRow,ButtonHover,SearchBox,PriceView,
    EventList,LifecycleTest, RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-1');
}

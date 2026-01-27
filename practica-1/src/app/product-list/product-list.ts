import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { NgClass } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ProductItem } from '../product-item/product-item';



@Component({
  selector: 'app-product-list',
  imports: [NgClass,FormsModule,ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  filterSearch: string = '';
  showImage = true;
  imageAlgo() {
    this.showImage = !this.showImage;
  }
  title = 'Mi lista de productos';
  headers = { image: 'Imagen', desc: 'Producto', price: 'Precio', avail: 'Disponible' };
  products: IProduct[] =[
    {
      id: 1,
      desc: 'SSD hard drive',
      avail: new Date('2016-10-03'),
      price: 75,
      imageUrl: 'ssd.jpeg',
      rating: 5,
    },
    {
      id: 2,
      desc: 'LGA1151 Motherboard',
      avail: new Date('2016-09-15'),
      price: 96.95,
      imageUrl: 'placa.jpg',
      rating: 1,
    },
  ];
}

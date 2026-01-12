import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [NgClass],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
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
      imageUrl: '/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      desc: 'LGA1151 Motherboard',
      avail: new Date('2016-09-15'),
      price: 96.95,
      imageUrl: '/motherboard.jpg',
      rating: 4,
    },
  ];
}

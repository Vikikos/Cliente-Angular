import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct } from "../interfaces/i-product";
import { StarRating } from "../star-rating/star-rating";

@Component({
    selector: '[product-item]',
    imports: [CommonModule, StarRating],
    templateUrl: './product-item.html',
    styleUrl: './product-item.css',
})
export class ProductItem {
    product: IProduct = {
    id: 1,
    desc: 'SSD 250GB hard drive',
    avail: new Date('2016-10-03'),
    price: 75,
    imageUrl: 'ssd.jpg',
    rating: 5,
    };
    showImage = true;
}

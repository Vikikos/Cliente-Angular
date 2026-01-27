import { CommonModule } from '@angular/common';

import { IProduct } from "../interfaces/i-product";
import { StarRating } from "../star-rating/star-rating";
import { Component, Input } from '@angular/core';


@Component({
    selector: '[product-item]',
    imports: [CommonModule, StarRating],
    templateUrl: './product-item.html',
    styleUrl: './product-item.css',
})
export class ProductItem {
    //recibimos los datos
    @Input() product!: IProduct;
    @Input() showImage!: boolean;
    changeRating(rating: number) {
        this.product.rating = rating;
    }
}

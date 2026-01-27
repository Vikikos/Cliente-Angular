import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
    @Input() rating!: number;
    auxRating!: number;

    ngOnInit() {
        this.restoreRating();
    }

    restoreRating() {
        this.auxRating = this.rating;
    }

    @Output() ratingChanged = new EventEmitter<number>();
    setRating() {
        this.ratingChanged.emit(this.auxRating);
    }
}

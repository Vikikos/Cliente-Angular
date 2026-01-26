import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'star-rating',
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  rating: number = 4;
}

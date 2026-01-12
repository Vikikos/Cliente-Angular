import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  //Ej 1
  profilemage = 'avatar.png';
  //Ej 2
  isPremium = true;

}

import { Component } from '@angular/core';
import { NoticeItem } from '../notice-item/notice-item';

@Component({
  selector: 'notice-list',
  imports: [NoticeItem],
  templateUrl: './notice-list.html',
  styleUrl: './notice-list.css',
})
export class NoticeList {
  notices = [
    {'text' : 'Aviso importante 1',},
    {'text' : 'Aviso importante 2'},
    {'text' : 'Aviso importante 3'}
  ]
}

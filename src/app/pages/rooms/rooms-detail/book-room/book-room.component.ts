import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {
  datePickerConfig: any;
  selectedDate: any;

  constructor() { }

  ngOnInit(): void {
  }

}

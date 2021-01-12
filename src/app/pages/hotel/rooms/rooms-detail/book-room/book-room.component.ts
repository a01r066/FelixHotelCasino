import { Component, OnInit } from '@angular/core';
import {Room} from '../../room.model';
import {DataService} from '../../../../../data-services/data.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {
  datePickerConfig: any;
  selectedDate: any;
  selectedRoom: Room;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.selectedRoom = this.dataService.selectedRoom;
  }
}

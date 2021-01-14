import { Component, OnInit } from '@angular/core';
import {Room} from '../../room.model';
import {DataService} from '../../../../../data-services/data.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UiService} from '../../../../../data-services/ui.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {
  datePickerConfig: any;
  selectedDate: any;
  selectedRoom: Room;
  bookingForm: FormGroup;

  constructor(private dataService: DataService,
              private uiService: UiService) { }

  ngOnInit(): void {
    this.selectedRoom = this.dataService.selectedRoom;
    this.bookingForm = new FormGroup({
      fullName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      })
    });
  }

  onBookNow(){
    // console.log(value);
    // post booking info to db
    // show success alert
    this.uiService.alertChangedSub.next(true);
    // redirect to homepage

  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UiService} from '../../../../data-services/ui.service';
import {Room} from '../room.model';
import {DataService} from '../../../../data-services/data.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-rooms-detail',
  templateUrl: './rooms-detail.component.html',
  styleUrls: ['./rooms-detail.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ])
  ]
})
export class RoomsDetailComponent implements OnInit {
  selectedRoom: Room;
  filteredRooms: Room[];

  constructor(private dataService: DataService,
              private uiService: UiService,
              private router: Router) { }

  ngOnInit(): void {
    this.selectedRoom = this.dataService.selectedRoom;
    this.filteredRooms = this.dataService.filteredRooms;
  }

  viewDetail(room: Room){
    this.dataService.selectedRoom = room;
    this.selectedRoom = room;
  }

  bookNow(){
    this.router.navigate(['book-now', this.selectedRoom.title]);
  }
}

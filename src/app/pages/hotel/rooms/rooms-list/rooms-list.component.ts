import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomCategory} from '../room-category.model';
import {Room} from '../room.model';
import {UiService} from '../../../../data-services/ui.service';
import {DataService} from '../../../../data-services/data.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
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
export class RoomsListComponent implements OnInit {
  roomLists: Room[][] = [];
  roomCategories: RoomCategory[] = [];

  constructor(private dataService: DataService,
              private uiService: UiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getRoomCategories();
    this.uiService.roomCategoriesSub.subscribe(categories => {
      this.roomCategories = categories;
    });

    this.dataService.getRoomLists();
    this.uiService.roomsListSub.subscribe(roomLists => {
      this.roomLists = roomLists;
    });
  }

  viewDetail(room: Room, rooms: Room[]){
    this.dataService.selectedRoom = room;
    // this.dataService.getFilteredRooms(room, rooms);
    this.dataService.filteredRooms = rooms;
    // this.router.navigate(['rooms', room.id]);
    this.router.navigate([room.title], { relativeTo: this.route });
  }
}

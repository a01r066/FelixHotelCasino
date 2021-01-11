import { Component, OnInit } from '@angular/core';
import {Room} from '../room.model';
import {RoomCategory} from '../room-category.model';
import {DataService} from '../../../data-services/data.service';
import {UiService} from '../../../data-services/ui.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
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

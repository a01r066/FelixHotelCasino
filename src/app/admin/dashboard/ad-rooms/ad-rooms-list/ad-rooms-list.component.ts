import { Component, OnInit } from '@angular/core';
import {Room} from '../../../../pages/hotel/rooms/room.model';
import {DataService} from '../../../../data-services/data.service';
import {UiService} from '../../../../data-services/ui.service';
import {RoomCategory} from '../../../../pages/hotel/rooms/room-category.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ad-rooms-list',
  templateUrl: './ad-rooms-list.component.html',
  styleUrls: ['./ad-rooms-list.component.css']
})
export class AdRoomsListComponent implements OnInit {
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

  edit(room: Room){
    this.dataService.selectedEditRoom = room;
    this.router.navigate(['room', 'edit', room.id], { relativeTo: this.route });
  }

  delete(room: Room){
    this.dataService.deleteRoom(room);
  }

  addRoom(room: Room, cateID: string, roomCate: RoomCategory){
    this.dataService.selectedRoomCate = roomCate;
    this.router.navigate(['room', 'add', cateID], { relativeTo: this.route });
  }
}

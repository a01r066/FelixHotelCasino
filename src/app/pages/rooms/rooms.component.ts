import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data-services/data.service';
import {UiService} from '../../data-services/ui.service';
import {RoomCategory} from './room-category.model';
import {Room} from './room.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  roomLists: Room[][] = [];
  roomCategories: RoomCategory[] = [];
  constructor(private dataService: DataService,
              private uiService: UiService) { }

  ngOnInit(): void {
    this.dataService.getRoomCategories();
    this.uiService.roomCategoriesSub.subscribe(categories => {
      this.roomCategories = categories;
    });

    this.dataService.getRoomLists();
    this.uiService.roomListsSub.subscribe(roomLists => {
      this.roomLists = roomLists;
    });
  }
}

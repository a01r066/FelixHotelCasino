import { Component, OnInit } from '@angular/core';
import {Room} from '../pages/rooms/room.model';
import {DataService} from '../data-services/data.service';
import {UiService} from '../data-services/ui.service';

@Component({
  selector: 'app-featured-food',
  templateUrl: './featured-food.component.html',
  styleUrls: ['./featured-food.component.css']
})
export class FeaturedFoodComponent implements OnInit {
  rooms: Room[] = [];
  constructor(private dataService: DataService,
              private uiService: UiService) { }

  ngOnInit(): void {
    this.dataService.getRoomLists();
    this.uiService.roomsListSub.subscribe(roomLists => {
      roomLists.forEach(rooms => {
        this.rooms.push(rooms[0]);
      });
      this.rooms = this.rooms.slice(0, 3);
    });
  }
}

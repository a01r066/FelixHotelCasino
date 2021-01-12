import { Component, OnInit } from '@angular/core';
import {DataService} from '../data-services/data.service';
import {UiService} from '../data-services/ui.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Room} from '../pages/hotel/rooms/room.model';

@Component({
  selector: 'app-featured-food',
  templateUrl: './featured-food.component.html',
  styleUrls: ['./featured-food.component.css']
})
export class FeaturedFoodComponent implements OnInit {
  rooms: Room[] = [];
  constructor(private dataService: DataService,
              private uiService: UiService,
              private router: Router) { }

  ngOnInit(): void {
    this.dataService.getRoomLists();
    this.uiService.roomsListSub.subscribe(roomLists => {
      roomLists.forEach(rooms => {
        this.rooms.push(rooms[0]);
      });
      this.rooms = this.rooms.slice(0, 3);
    });
  }

  viewDetail(room: Room, rooms: Room[]){
    this.dataService.selectedRoom = room;
    this.dataService.filteredRooms = rooms;
    this.router.navigate(['rooms', room.id]);
  }
}

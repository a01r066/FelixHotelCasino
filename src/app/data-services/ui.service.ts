import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {RoomCategory} from '../pages/rooms/room-category.model';
import {Room} from '../pages/rooms/room.model';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  roomCategoriesSub = new Subject<RoomCategory[]>();
  roomListsSub = new Subject<Room[][]>();
}

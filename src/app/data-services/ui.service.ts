import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {RoomCategory} from '../pages/rooms/room-category.model';
import {Room} from '../pages/rooms/room.model';
import {EventModel} from '../pages/events/event.model';
import {Slide} from '../pages/about/slide.model';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  roomCategoriesSub = new Subject<RoomCategory[]>();
  roomsListSub = new Subject<Room[][]>();
  eventsSub = new Subject<EventModel[]>();
  slidesSub = new Subject<Slide[]>();
}

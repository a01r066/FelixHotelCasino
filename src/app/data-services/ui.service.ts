import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {RoomCategory} from '../pages/hotel/rooms/room-category.model';
import {Room} from '../pages/hotel/rooms/room.model';
import {EventModel} from '../pages/events/event.model';
import {Slide} from '../pages/about/slide.model';
import {Clip} from '../pages/events/promotional-video/clip.model';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  roomCategoriesSub = new Subject<RoomCategory[]>();
  roomsListSub = new Subject<Room[][]>();
  eventsSub = new Subject<EventModel[]>();
  clipsSub = new Subject<Clip[]>();
  slidesSub = new Subject<Slide[]>();
}

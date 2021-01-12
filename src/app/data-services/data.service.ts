import {Injectable} from '@angular/core';
import firebase from 'firebase';
import {RoomCategory} from '../pages/hotel/rooms/room-category.model';
import {UiService} from './ui.service';
import {Room} from '../pages/hotel/rooms/room.model';
import {EventModel} from '../pages/events/event.model';
import {Slide} from '../pages/about/slide.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL = 'https://ngfelixhotelcasino-default-rtdb.firebaseio.com/';
  database = firebase.database();

  selectedRoom: Room;
  filteredRooms: Room[];

  selectedEvent: EventModel;

  constructor(private uiService: UiService) {
  }

  getSlides(){
    const slides: Slide[] = [];
    this.database.ref('Slides').once('value').then(snapshot => {
      snapshot.forEach(slideSnapshot => {
        const slideId = slideSnapshot.key;
        const dataObj = {
          title: slideSnapshot.val().title,
          desc: slideSnapshot.val().desc,
          imagePath: slideSnapshot.val().imagePath
        };
        const slide = new Slide(slideId, dataObj);
        slides.push(slide);
      });
      this.uiService.slidesSub.next(slides);
    });
  }

  getEvents(){
    const events: EventModel[] = [];
    this.database.ref('Events').once('value').then(snapshot => {
      snapshot.forEach(eventSnapshot => {
        const eventID = eventSnapshot.key;
        const dataObj = {
          title: eventSnapshot.val().title,
          desc: eventSnapshot.val().desc,
          content: eventSnapshot.val().content,
          imagePath: eventSnapshot.val().imagePath,
          fullImagePath: eventSnapshot.val().fullImagePath,
          videoPath: eventSnapshot.val().videoPath,
          dateStart: eventSnapshot.val().dateStart,
          dateEnd: eventSnapshot.val().dateEnd
        };
        const event = new EventModel(eventID, dataObj);
        events.push(event);
      });
      this.uiService.eventsSub.next(events);
    });
  }

  // getFilteredRooms(room: Room, rooms: Room[]){
  //   this.filteredRooms = rooms.filter(currRoom => {
  //     return currRoom.id !== room.id;
  //   });
  //   return this.filteredRooms;
  // }

  getRoomLists(){
    const roomLists: Room[][] = [];
    this.database.ref('Rooms').once('value').then(snapshot => {
      snapshot.forEach(roomCateSnapshot => {
        const rooms: Room[] = [];
        const roomCateId = roomCateSnapshot.key;
        roomCateSnapshot.forEach(roomSnapshot => {
          const roomId = roomSnapshot.key;
          const dataObj = {
            title: roomSnapshot.val().title,
            desc: roomSnapshot.val().desc,
            beds: roomSnapshot.val().beds,
            occupancy: roomSnapshot.val().occupancy,
            size: roomSnapshot.val().size,
            view: roomSnapshot.val().view,
            ratesFrom: roomSnapshot.val().ratesFrom,
            imagePaths: roomSnapshot.val().imagePaths
          };
          const room = new Room(roomId, roomCateId, dataObj);
          rooms.push(room);
        });
        roomLists.push(rooms);
      });
      this.uiService.roomsListSub.next(roomLists);
    });
  }

  getRoomCategories(){
    const roomCategories = [];
    this.database.ref('Room-Categories').once('value').then(snapshot => {
      snapshot.forEach(itemSnapshot => {
        const roomCateId = itemSnapshot.key;
        const dataObj = {
          title: itemSnapshot.val().title,
          desc: itemSnapshot.val().desc,
          imagePath: itemSnapshot.val().imagePath
        };
        const roomCate = new RoomCategory(roomCateId, dataObj);
        roomCategories.push(roomCate);
      });
      this.uiService.roomCategoriesSub.next(roomCategories);
    });
  }
}

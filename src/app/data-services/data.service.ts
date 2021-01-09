import {Injectable} from '@angular/core';
import firebase from 'firebase';
import {RoomCategory} from '../pages/rooms/room-category.model';
import {UiService} from './ui.service';
import {Room} from '../pages/rooms/room.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL = 'https://ngfelixhotelcasino-default-rtdb.firebaseio.com/';
  database = firebase.database();

  constructor(private uiService: UiService) {
  }

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
      this.uiService.roomListsSub.next(roomLists);
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

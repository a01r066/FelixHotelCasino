import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {CasinoComponent} from './pages/casino/casino.component';
import {EventsComponent} from './pages/events/events.component';
import {ContactComponent} from './pages/contact/contact.component';
import { EventsListComponent } from './pages/events/events-container/events-list/events-list.component';
import { EventsDetailComponent } from './pages/events/events-container/events-detail/events-detail.component';
import {CommonModule} from '@angular/common';
import {FacilitiesComponent} from './pages/casino/facilities/facilities.component';
import {GamesComponent} from './pages/casino/games/games.component';
import {GamesListComponent} from './pages/casino/games/games-list/games-list.component';
import {GameDetailComponent} from './pages/casino/games/game-detail/game-detail.component';
import {RoomsListComponent} from './pages/hotel/rooms/rooms-list/rooms-list.component';
import {BookRoomComponent} from './pages/hotel/rooms/rooms-detail/book-room/book-room.component';
import {RoomsDetailComponent} from './pages/hotel/rooms/rooms-detail/rooms-detail.component';
import {HotelComponent} from './pages/hotel/hotel.component';
import {HotelFacilityComponent} from './pages/hotel/hotel-facility/hotel-facility.component';
import {RoomsComponent} from './pages/hotel/rooms/rooms.component';
import {PromotionalVideoComponent} from './pages/events/promotional-video/promotional-video.component';
import {EventsContainerComponent} from './pages/events/events-container/events-container.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage'} },
  // { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage'} },
  { path: 'hotel', component: HotelComponent, children: [
      { path: '', component: HotelFacilityComponent },
      { path: 'rooms', component: RoomsComponent, children: [
          { path: '', component: RoomsListComponent },
          { path: ':id', component: RoomsDetailComponent }
        ] }
    ] },
   { path: 'book-now/:title', component: BookRoomComponent },
  { path: 'casino', component: CasinoComponent, children: [
      { path: '', component: FacilitiesComponent },
      { path: 'games', component: GamesComponent, children: [
          { path: '', component: GamesListComponent },
          { path: ':id', component: GameDetailComponent }
        ]}
    ] },
  { path: 'events', component: EventsComponent, children: [
      { path: 'list', component: EventsContainerComponent, children: [
          { path: '', component: EventsListComponent },
          { path: ':id', component: EventsDetailComponent }
        ] },
      { path: 'promotional-videos', component: PromotionalVideoComponent }
    ] },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

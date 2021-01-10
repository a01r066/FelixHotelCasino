import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {RoomsComponent} from './pages/rooms/rooms.component';
import {CasinoComponent} from './pages/casino/casino.component';
import {EventsComponent} from './pages/events/events.component';
import {ContactComponent} from './pages/contact/contact.component';
import { EventsListComponent } from './pages/events/events-list/events-list.component';
import { EventsDetailComponent } from './pages/events/events-detail/events-detail.component';
import { RoomsListComponent } from './pages/rooms/rooms-list/rooms-list.component';
import { RoomsDetailComponent } from './pages/rooms/rooms-detail/rooms-detail.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rooms', component: RoomsComponent, children: [
      { path: '', component: RoomsListComponent },
      { path: ':id', component: RoomsDetailComponent }
    ] },
  { path: 'casino', component: CasinoComponent },
  { path: 'events', component: EventsComponent, children: [
      { path: '', component: EventsListComponent },
      { path: ':id', component: EventsDetailComponent }
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

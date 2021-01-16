import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AdRoomDetailComponent } from './dashboard/ad-rooms/ad-room-detail/ad-room-detail.component';
import {AdRoomsComponent} from './dashboard/ad-rooms/ad-rooms.component';
import {AdRoomsListComponent} from './dashboard/ad-rooms/ad-rooms-list/ad-rooms-list.component';
import {AdminComponent} from './admin.component';
import {AuthGuard} from '../auth/auth.guard';
import {SharedModule} from '../shared/shared.module';
import {AuthModule} from '../auth/auth.module';
import {AdEventsComponent} from './dashboard/ad-events/ad-events.component';
import {AdMoreRoomComponent} from './dashboard/ad-rooms/ad-more-room/ad-more-room.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'events', component: AdEventsComponent },
      {
        path: 'rooms', component: AdRoomsComponent, children: [
          { path: '', component: AdRoomsListComponent },
          { path: ':id', component: AdRoomDetailComponent },
          { path: 'room/:id', component: AdMoreRoomComponent }
        ]
      }
    ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    AuthModule
  ],
  exports: [RouterModule],
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdRoomsComponent,
    AdRoomsListComponent,
    AdRoomDetailComponent,
    AdEventsComponent,
    AdMoreRoomComponent
  ]
})
export class AdminRoutingModule {

}

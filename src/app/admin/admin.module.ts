import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdRoomsComponent} from './dashboard/ad-rooms/ad-rooms.component';
import {AdRoomsListComponent} from './dashboard/ad-rooms/ad-rooms-list/ad-rooms-list.component';
import {AdRoomDetailComponent} from './dashboard/ad-rooms/ad-room-detail/ad-room-detail.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AuthModule} from '../auth/auth.module';
import {SharedModule} from '../shared/shared.module';
import { AdEventsComponent } from './dashboard/ad-events/ad-events.component';
import { AdMoreRoomComponent } from './dashboard/ad-rooms/ad-more-room/ad-more-room.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdRoomsComponent,
    AdRoomsListComponent,
    AdRoomDetailComponent,
    AdEventsComponent,
    AdMoreRoomComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    AuthModule
  ]
})
export class AdminModule {

}

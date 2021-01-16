import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdRoomsComponent} from './dashboard/ad-rooms/ad-rooms.component';
import {AdRoomsListComponent} from './dashboard/ad-rooms/ad-rooms-list/ad-rooms-list.component';
import {AdRoomDetailComponent} from './dashboard/ad-rooms/ad-room-detail/ad-room-detail.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import {AuthModule} from '../auth/auth.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdRoomsComponent,
    AdRoomsListComponent,
    AdRoomDetailComponent
  ],
  imports: [
    AdminRoutingModule,
    AuthModule
  ]
})
export class AdminModule {

}

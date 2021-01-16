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

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'rooms', component: AdRoomsComponent, children: [
          { path: '', component: AdRoomsListComponent },
          { path: ':id', component: AdRoomDetailComponent }
        ] }
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
    AdRoomDetailComponent
  ]
})
export class AdminRoutingModule {

}

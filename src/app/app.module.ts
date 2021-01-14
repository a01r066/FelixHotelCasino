import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CookDeleciousComponent } from './cook-delecious/cook-delecious.component';
import { ServicesComponent } from './services/services.component';
import { BookTableComponent } from './book-table/book-table.component';
import { GetAppComponent } from './get-app/get-app.component';
import { FeaturedFoodComponent } from './featured-food/featured-food.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { AboutComponent } from './pages/about/about.component';
import { RoomsComponent } from './pages/hotel/rooms/rooms.component';
import { CasinoComponent } from './pages/casino/casino.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import firebase from 'firebase';
import {EventsListComponent} from './pages/events/events-container/events-list/events-list.component';
import {EventsDetailComponent} from './pages/events/events-container/events-detail/events-detail.component';
import {RoomsListComponent} from './pages/hotel/rooms/rooms-list/rooms-list.component';
import {RoomsDetailComponent} from './pages/hotel/rooms/rooms-detail/rooms-detail.component';
import { FacilitiesComponent } from './pages/casino/facilities/facilities.component';
import { GamesComponent } from './pages/casino/games/games.component';
import { GameDetailComponent } from './pages/casino/games/game-detail/game-detail.component';
import { GamesListComponent } from './pages/casino/games/games-list/games-list.component';
import {NgImageSliderModule} from 'ng-image-slider';
import { BookRoomComponent } from './pages/hotel/rooms/rooms-detail/book-room/book-room.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HotelComponent } from './pages/hotel/hotel.component';
import {HotelFacilityComponent} from './pages/hotel/hotel-facility/hotel-facility.component';
import { PromotionalVideoComponent } from './pages/events/promotional-video/promotional-video.component';
import { EventsContainerComponent } from './pages/events/events-container/events-container.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { AlertComponent } from './shared/alert/alert.component';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CookDeleciousComponent,
    ServicesComponent,
    BookTableComponent,
    GetAppComponent,
    FeaturedFoodComponent,
    OurBlogComponent,
    AboutComponent,
    RoomsComponent,
    CasinoComponent,
    ContactComponent,
    EventsComponent,
    HomeComponent,
    SignUpComponent,
    FooterComponent,
    EventsListComponent,
    EventsDetailComponent,
    RoomsListComponent,
    RoomsDetailComponent,
    FacilitiesComponent,
    GamesComponent,
    GameDetailComponent,
    GamesListComponent,
    BookRoomComponent,
    HotelFacilityComponent,
    HotelComponent,
    PromotionalVideoComponent,
    EventsContainerComponent,
    ScrollToTopComponent,
    AlertComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAnalyticsModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        NgImageSliderModule,
        DpDatePickerModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

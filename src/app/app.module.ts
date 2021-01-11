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
import { RoomsComponent } from './pages/rooms/rooms.component';
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
import {EventsListComponent} from './pages/events/events-list/events-list.component';
import {EventsDetailComponent} from './pages/events/events-detail/events-detail.component';
import {RoomsListComponent} from './pages/rooms/rooms-list/rooms-list.component';
import {RoomsDetailComponent} from './pages/rooms/rooms-detail/rooms-detail.component';
import { FacilitiesComponent } from './pages/casino/facilities/facilities.component';
import { GamesComponent } from './pages/casino/games/games.component';
import { GameDetailComponent } from './pages/casino/games/game-detail/game-detail.component';
import { GamesListComponent } from './pages/casino/games/games-list/games-list.component';
import {NgImageSliderModule} from 'ng-image-slider';
import { BookRoomComponent } from './pages/rooms/rooms-detail/book-room/book-room.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import {FormsModule} from '@angular/forms';

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
    BookRoomComponent
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
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

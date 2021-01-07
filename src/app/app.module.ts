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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

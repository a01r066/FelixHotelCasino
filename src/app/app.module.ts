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
    OurBlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

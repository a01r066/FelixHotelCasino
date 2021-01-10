import { Component, OnInit } from '@angular/core';
import {EventModel} from '../pages/events/event.model';
import {DataService} from '../data-services/data.service';
import {UiService} from '../data-services/ui.service';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.css']
})
export class OurBlogComponent implements OnInit {
  events: EventModel[] = [];

  constructor(private dataService: DataService,
              private uiService: UiService) { }

  ngOnInit(): void {
    this.dataService.getEvents();
    this.uiService.eventsSub.subscribe(events => {
      this.events = events.slice(0, 4);
    });
  }
}

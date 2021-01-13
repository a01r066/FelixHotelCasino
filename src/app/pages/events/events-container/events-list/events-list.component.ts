import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../event.model';
import {DataService} from '../../../../data-services/data.service';
import {UiService} from '../../../../data-services/ui.service';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ])
  ]
})
export class EventsListComponent implements OnInit {
  events: EventModel[] = [];

  constructor(private dataService: DataService,
              private uiService: UiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getEvents();
    this.uiService.eventsSub.subscribe(events => {
      this.events = events;
    });
  }

  viewDetail(event: EventModel){
    this.dataService.selectedEvent = event;
    this.router.navigate([event.title], { relativeTo: this.route });
  }
}

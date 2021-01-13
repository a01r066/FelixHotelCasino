import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../event.model';
import {DataService} from '../../../../data-services/data.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css'],
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
export class EventsDetailComponent implements OnInit {
  selectedEvent: EventModel;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.selectedEvent = this.dataService.selectedEvent;
  }

}

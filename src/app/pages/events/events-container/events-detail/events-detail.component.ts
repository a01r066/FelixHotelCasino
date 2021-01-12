import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../event.model';
import {DataService} from '../../../../data-services/data.service';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {
  selectedEvent: EventModel;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.selectedEvent = this.dataService.selectedEvent;
  }

}

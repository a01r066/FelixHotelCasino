import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  viewEvents(){
    this.router.navigate(['list'], { relativeTo: this.route });
  }

  viewPromotionalVideos(){
    this.router.navigate(['promotional-videos'], { relativeTo: this.route });
  }
}

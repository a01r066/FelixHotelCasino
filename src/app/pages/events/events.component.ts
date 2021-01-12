import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  tabs = ['EVENTS', 'PROMOTIONAL VIDEOS'];
  selectedIndex = 0;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelect(index: number){
    this.selectedIndex = index;
    if(index === 0){
      this.router.navigate(['list'], { relativeTo: this.route });
    } else {
      this.router.navigate(['promotional-videos'], { relativeTo: this.route });
    }
  }
}

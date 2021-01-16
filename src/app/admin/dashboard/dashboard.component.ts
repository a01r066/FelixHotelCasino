import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  links = ['ROOMS', 'EVENTS'];
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  openLink(index){
    this.selectedIndex = index;
  }
}

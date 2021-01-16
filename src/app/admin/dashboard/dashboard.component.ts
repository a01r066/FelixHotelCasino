import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  links = ['ROOMS', 'EVENTS'];
  selectedIndex = 0;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  openLink(index){
    this.selectedIndex = index;
    const link = this.links[index].toLowerCase();
    this.router.navigate([link], { relativeTo: this.route });
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UiService} from '../../data-services/ui.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  tabs = ['FACILITIES', 'ROOMS'];
  selectedIndex = 0;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private uiService: UiService) { }

  ngOnInit(): void {
  }

  onSelect(index: number){
    this.selectedIndex = index;
    if(index === 0){
      this.router.navigate(['hotel']);
    } else {
      this.router.navigate(['rooms'], { relativeTo: this.route });
    }
  }
}

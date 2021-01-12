import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UiService} from '../../data-services/ui.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  isHotelFacility = true;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private uiService: UiService) { }

  ngOnInit(): void {
  }

  viewFacility(){
    this.router.navigate(['hotel']);
  }

  viewRooms(){
    this.router.navigate(['rooms'], { relativeTo: this.route });
  }
}

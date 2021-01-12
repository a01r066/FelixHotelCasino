import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css']
})
export class CasinoComponent implements OnInit {
  tabs = ['FACILITIES', 'GAME GUIDES'];
  selectedIndex = 0;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelect(index: number){
    this.selectedIndex = index;
    if(index === 0){
      this.router.navigate(['casino']);
    } else {
      this.router.navigate(['games'], { relativeTo: this.route });
    }
  }
}

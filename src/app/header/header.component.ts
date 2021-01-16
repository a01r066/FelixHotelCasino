import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links = ["HOME", "ABOUT", "HOTEL", "CASINO", "EVENTS", "CONTACT"];
  selectedIndex = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openLink(link: string, index: number){
    this.selectedIndex = index;
    let strLink = link.toLowerCase();
    if(strLink === 'events'){
      strLink += '/list';
    }
    this.router.navigate([strLink]);
  }
}

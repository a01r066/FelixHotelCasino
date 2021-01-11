import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links = ["HOME", "ABOUT", "ROOMS", "CASINO", "EVENTS", "CONTACT"];
  isCasino = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
